import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput, TouchableWithoutFeedback, ScrollView} from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

export default class Map extends Component{

  constructor(props) {
    super(props);


    this.handleCollapse = this.handleCollapse.bind(this)
    this.state = {destination: "Where to?", expandPoints: false}
    this.interestOptions = (
      ['water', 'microwaves', 'printer', 'nap', 'food', 'student services', 'advising'].map((prop,key) => {
        return (
          <TouchableWithoutFeedback key = {key}>
            <View style = {styles.pointsLabel}>
              <Text style = {{fontSize: 12, fontWeight: 'bold', color: this.getRandomColor()}}>{prop}</Text>
            </View>
          </TouchableWithoutFeedback>
        )
    }));
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


  handleCollapse() {
    this.setState((prevState) => ({
      expandPoints: !prevState.expandPoints
    }))
  }

  render(){
    return (
     <View style={styles.container}>
       <MapView
         provider={PROVIDER_GOOGLE} // remove if not using Google Maps
         style={styles.map}
         showsUserLocation = {true}
         region={{
           latitude: this.props.location.latitude,
           longitude: this.props.location.longitude,
           latitudeDelta: 0.015,
           longitudeDelta: 0.0121,
         }}
       />
       <View style={styles.transit}>
          <View style = {inTransit.line}></View>
          <View style = {inTransit.topCircle}></View>
          <View style = {inTransit.bottomCircle}></View>
          <View style = {inTransit.horizontalLine}></View>
          <Text style = {inTransit.originText}>Current Location</Text>
          <TextInput
                style = {inTransit.destinationText}
                onChangeText={text => {
                  this.setState({destination: text});
                }}
                value={this.state.destination}
              />
       </View>

       <View style = {styles.pointsOfInterest}>
          <ScrollView horizontal alwaysBounceHorizontal>
            <TouchableWithoutFeedback onPress = {this.handleCollapse}>
                <View style = {styles.pointsLabelHeader}>
                  <Text style = {{color: "rgb(255,255,255)", fontSize: 12, fontWeight: "bold"}}>{this.state.expandPoints ? "Points of Interest <" : "Points of Interest >"}</Text>
                </View>
            </TouchableWithoutFeedback>
            {this.state.expandPoints ? this.interestOptions: <></>}
          </ScrollView>
       </View>
     </View>
   )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  transit: {
    position: "absolute",
    top: 50,
    height: "13%",
    width: "88%",
    backgroundColor: "rgb(255,255,255)",
    borderRadius: 21.5,
  },
  pointsOfInterest: {
    position: "absolute",
    top: 170,
    height: "3.13%",
    width: "100%",
  },
  pointsLabelHeader: {
    height: "100%",
    borderRadius: 21.5,
    backgroundColor: "rgb(106,145,255)",
    marginLeft: 25,
    width: 156,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 89
  },
  pointsLabel: {
    height: "100%",
    borderRadius: 21.5,
    width: 107,
    opacity: 0.89,
    backgroundColor: "white",
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const inTransit = StyleSheet.create({
  topCircle: {
    position: "absolute",
    top: "22%",
    left: "6.0%",
    height: 11,
    width: 11,
    backgroundColor: "#ADD8E6",
    borderRadius: 100,
  },
  bottomCircle: {
    position: "absolute",
    top: "62%",
    left: "6.0%",
    height: 11,
    width: 11,
    backgroundColor: "#00008B",
    borderRadius: 100,
  },
  line: {
    position: "absolute",
    left: "7.3%",
    top: "30%",
    borderLeftColor: 'black',
    borderLeftWidth: 1,
    height: "36%",
  },
  horizontalLine: {
    position: "absolute",
    left: "14.5%",
    top: "48%",
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: "75%",
  },
  originText: {
    position: "absolute",
    left: "14.5%",
    top: "22%",
    color: "rgb(44,44,45)",
    fontSize: 14,
    opacity: 0.71
  },
  destinationText: {
    position: "absolute",
    left: "13.9%",
    top: "44%",
    color: "rgb(44,44,45)",
    fontSize: 14,
  },
})
