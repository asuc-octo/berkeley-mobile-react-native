import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Geolocation from '@react-native-community/geolocation';


export default class LibraryCard extends Component {
  constructor(props) {
    super(props);

    this.distance = this.distance.bind(this)
    this.getUserLocation = this.getUserLocation.bind(this)

    this.getUserLocation()
    this.state = {};
  }

  occupancyColor = {
    'High': '#e33e10',
    'Medium': 'orange',
    'Low': '#55db16'
  }

  getUserLocation = () => {
    Geolocation.getCurrentPosition(location => this.setState({ lat: location.coords.latitude, long: location.coords.longitude }));
  }

  distance = (lat1, lon1) => {
    let lat2 = this.state.lat
    let lon2 = this.state.long
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
  		return Math.round(dist / 0.05167);
  	}
  };

  render() {
    return(
      <View style = {styles.container}>
        <View style = {{flex: 2}}>
          <Text style = {[{fontSize: (20 > this.props.data.name.length ? 15: 10)}, styles.libraryName]}>{this.props.data.name}</Text>
          <View style = {styles.libraryInfo}>
            <Image
              style = {{width: 20, height: 30}}
              source = {{uri: "https://cdn3.iconfinder.com/data/icons/vehicles-and-transportation-icon-set/434/walking-simple-black-icon-512.png"}}
            />
            <Text style = {{color: 'grey'}}>{this.distance(this.props.data.latitude, this.props.data.longitude)} min</Text>
            <Image
              style = {{marginLeft: 10, width: 25, height: 30}}
              source = {{uri: "https://static.thenounproject.com/png/1214872-200.png"}}
            />
            <View style = {{borderRadius: 100, backgroundColor: this.occupancyColor[this.props.data.occupancy]}}>
              <Text style = {styles.libraryOccupancy}>{this.props.data.occupancy}</Text>
            </View>
          </View>
        </View>
        <Image style = {styles.libraryImage} source = {{uri: this.props.data.image}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      width: 300,
      height: 90,
      borderRadius: 10,
      marginTop: 15,
      backgroundColor: '#fffff0',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',

  },
  libraryName: {
    flex: 2,
    paddingLeft: 15,
    paddingTop: 20,
    fontWeight: 'bold',
    letterSpacing: 1.2
  },
  libraryImage: {
    borderRadius: 10,
    height: 80,
    marginRight: 5,
    width: 100,
  },
  libraryInfo: {
    flexDirection: 'row',
    flex: 1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 15,
    marginLeft: 6,
  },
  libraryOccupancy: {
    padding: 4,
    paddingLeft: 10,
    paddingRight: 10,
    color: 'white',
    fontSize: 10,
    letterSpacing: 1.1,
  }
})
