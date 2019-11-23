import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';


export default class LocationCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  occupancyColor = {
    'High': 'rgb(221,67,67)',
    'Medium': 'rgb(251,179,43)',
    'Low': 'rgb(162,183,14)'
  }


  render() {
    return(
      <View style = {styles.container}>
        <View style = {{flex: 2}}>
          <Text style = {[{fontSize: (20 > this.props.data.name.length ? 15: 10)}, styles.locationName]}>{this.props.data.name}</Text>
          <View style = {styles.detInfo}>
            <Image
              style = {{width: 25, height: 25}}
              source = {{uri: "https://cdn3.iconfinder.com/data/icons/vehicles-and-transportation-icon-set/434/walking-simple-black-icon-512.png"}}
            />
            <TouchableWithoutFeedback onPress={() => this.props.sortDistance()}>
                <Text style = {{color: 'rgb(98,97,98)', fontSize: 10.5}}>{Math.round(this.props.data.distance)} min</Text>
            </TouchableWithoutFeedback>
            <Image
              style = {{marginLeft: 10, width: 25, height: 25}}
              source = {{uri: "https://static.thenounproject.com/png/1214872-200.png"}}
            />
            <TouchableWithoutFeedback onPress={() => this.props.sortOccupancy()}>
                <View style = {{borderRadius: 21.5, opacity: 0.89, backgroundColor: this.occupancyColor[this.props.data.occupancy]}}>
                  <Text style = {styles.occupancy}>{this.props.data.occupancy}</Text>
                </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <Image style = {styles.locationImage} source = {{uri: this.props.data.image}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      width: "90%",
      height: 103,
      borderRadius: 7,
      marginTop: 14,
      backgroundColor: 'rgb(255,255,255)',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      shadowColor: 'rgba(0,0,0,0.24)',
      shadowOffset: { width: 0, height: -1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 7
  },
  locationName: {
    flex: 2,
    paddingLeft: 15,
    paddingTop: 20,
    fontWeight: 'bold',
    color: "rgb(44,44,45)",
    letterSpacing: 1.2
  },
  locationImage: {
    height: "90%",
    marginRight: 5,
    width: 100,
  },
  detInfo: {
    flexDirection: 'row',
    flex: 1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 15,
    marginLeft: 6,
  },
  occupancy: {
    padding: 4,
    paddingLeft: 8,
    paddingRight: 8,
    color: 'white',
    fontSize: 10,
  }
})
