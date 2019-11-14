import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

export default class Map extends Component{

  constructor(props) {
    super(props);

    this.state = {destination: "Where to?"};
  }

  render(){
    return (
     <View style={styles.container}>
       <MapView
         provider={PROVIDER_GOOGLE} // remove if not using Google Maps
         style={styles.map}
         showsUserLocation = {true}
         followsUserLocation = {true}
         showMyLocationButton = {true}
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
    height: "10%",
    width: "70%",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
  },
})

const inTransit = StyleSheet.create({
  topCircle: {
    position: "absolute",
    top: "22%",
    left: "8.2%",
    height: 12.5,
    width: 12.5,
    backgroundColor: "#ADD8E6",
    borderRadius: 100,
  },
  bottomCircle: {
    position: "absolute",
    top: "62%",
    left: "8.2%",
    height: 12.5,
    width: 12.5,
    backgroundColor: "#00008B",
    borderRadius: 100,
  },
  line: {
    position: "absolute",
    left: "10%",
    top: "30%",
    borderLeftColor: 'black',
    borderLeftWidth: 1,
    height: "40%",
  },
  horizontalLine: {
    position: "absolute",
    left: "20%",
    top: "55%",
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: "75%",
  },
  originText: {
    position: "absolute",
    left: "20%",
    top: "28%",
    fontSize: 10,
    fontWeight: "100",
    color: "#808080",
    letterSpacing: 1.2,
  },
  destinationText: {
    position: "absolute",
    left: "19%",
    top: "44%",
    fontSize: 10,
    letterSpacing: 1.1,
  },
})
