import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';


export default class LocationCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  occupancyColor = {
    'High': '#e33e10',
    'Medium': 'orange',
    'Low': '#55db16'
  }


  render() {
    return(
      <View style = {styles.container}>
        <View style = {{flex: 2}}>
          <Text style = {[{fontSize: (20 > this.props.data.name.length ? 15: 10)}, styles.locationName]}>{this.props.data.name}</Text>
          <View style = {styles.detInfo}>
            <Image
              style = {{width: 20, height: 30}}
              source = {{uri: "https://cdn3.iconfinder.com/data/icons/vehicles-and-transportation-icon-set/434/walking-simple-black-icon-512.png"}}
            />
            <TouchableWithoutFeedback onPress={() => this.props.sortDistance()}>
                <Text style = {{color: 'grey'}}>{Math.round(this.props.data.distance)} min</Text>
            </TouchableWithoutFeedback>
            <Image
              style = {{marginLeft: 10, width: 25, height: 30}}
              source = {{uri: "https://static.thenounproject.com/png/1214872-200.png"}}
            />
            <TouchableWithoutFeedback onPress={() => this.props.sortOccupancy()}>
                <View style = {{borderRadius: 100, backgroundColor: this.occupancyColor[this.props.data.occupancy]}}>
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
      width: 300,
      height: 90,
      borderRadius: 10,
      marginTop: 15,
      backgroundColor: '#fffff0',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',

  },
  locationName: {
    flex: 2,
    paddingLeft: 15,
    paddingTop: 20,
    fontWeight: 'bold',
    letterSpacing: 1.2
  },
  locationImage: {
    borderRadius: 10,
    height: 80,
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
    paddingLeft: 10,
    paddingRight: 10,
    color: 'white',
    fontSize: 10,
    letterSpacing: 1.1,
  }
})
