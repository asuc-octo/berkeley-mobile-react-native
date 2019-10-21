import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   justifyContent: 'center',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

export default class Map extends Component{

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
       >
       </MapView>
     </View>
   )
  }
}
