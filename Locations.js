import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Geolocation from '@react-native-community/geolocation';


import LocationCard from './LocationCard';

export default class Locations extends Component{

  constructor(props) {
    super(props);

    this.state = {filters: this.props.filters, data: this.props.data }

    this.addDistance = this.addDistance.bind(this);
    this.sortDataByDistance = this.sortDataByDistance.bind(this)
    this.sortDataByOccupancy = this.sortDataByOccupancy.bind(this)
    this.filterData = this.filterData.bind(this)

    this.addDistance();
  }

  addDistance = () => {
    distance = (lat1, lon1, lat2, lon2) => {
      if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
      }
      else {
        var radlat1 = Math.PI * lat1/180;
        var radlat2 = Math.PI * lat2/180;
        var theta = lon1-lon2;
        var radtheta = Math.PI * theta/180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
          dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        return dist / 0.05167;
      }
    };

    Geolocation.getCurrentPosition(location => {
      this.props.data.map(element => {
        element.distance = distance(element.latitude, element.longitude, location.coords.latitude, location.coords.longitude)
        return element
      })
      this.setState({data: this.props.data })
      this.sortDataByDistance()
    });
  }

  sortDataByDistance = () => {
    let getDistanceCompare = (a, b) => {
      let occupancyNumbers = {"High": 1, "Medium": 2, "Low": 3}
      if(a.distance == b.distance) {
        return occupancyNumbers[a.occupancy] < occupancyNumbers[b.occupancy] ? 1 : -1
      }
      else {
        return a.distance > b.distance ? 1 : -1
      }
    }

    this.setState({data: this.state.data.sort((a, b) => getDistanceCompare(a,b) )})
  }

  sortDataByOccupancy = () => {
    let getOccupancyCompare = (a, b) => {
      let occupancyNumbers = {"High": 1, "Medium": 2, "Low": 3}
      if(occupancyNumbers[a.occupancy] == occupancyNumbers[b.occupancy]) {
        return a.distance > b.distance ? 1 : -1
      }
      else {
        return occupancyNumbers[a.occupancy] < occupancyNumbers[b.occupancy] ? 1 : -1
      }
    }
    this.setState({data: this.state.data.sort((a, b) => getOccupancyCompare(a,b))})
  }

  toggleFilter = (filterKey) => {
    this.state.filters[filterKey].toggle = !this.state.filters[filterKey].toggle
    // this.setState({filters: this.state.filters}) //update view
    this.filterData()
  }

  filterData = () => {

  }


  render() {
    return(
        <View style = {styles.infoContainer}>
          <View style = {styles.infoHeader}>
            <Image style = {styles.infoIcon} source={{uri: this.props.iconImage}}/>
            <Text style = {styles.heading}>{this.props.heading}</Text>
          </View>
          <View style = {styles.cardDeck}>
            {this.state.data.map((prop, key) => {
              return (
                <LocationCard style={styles.card} sortDistance = {this.sortDataByDistance} sortOccupancy = {this.sortDataByOccupancy} key={key} data = {prop}/>
              );
            })}
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  infoContainer: {
    width: "90%",
    backgroundColor: "rgb(255,255,255)",
    opacity: 0.96,
    borderRadius: 12,
    marginTop: 10,
    padding: 20,
    marginLeft: "5%",
    alignItems: "center",
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2
  },
  infoHeader: {
    flexDirection: 'row',
    justifyContent: "center"
  },
  infoIcon: {
    width: 30,
    height: 30,
    marginRight: 25
  },
  cardDeck: {
    marginTop: 40,
  },
  heading: {
    fontSize: 21,
    fontWeight: "bold",
    color: "rgb(44,44,45)"
  }
})
