import React, {Component} from 'react';

import Geolocation from '@react-native-community/geolocation';
import SlidingUpPanel from 'rn-sliding-up-panel';
import Map from './Map.js';
import HomeV2 from './HomeV2.js'
import {  PermissionsAndroid, Platform } from 'react-native'

export default class Home extends Component{
  constructor(props) {
    super(props);

    this.updateLocation = this.updateLocation.bind(this)
    this.requestLocationPermissionAndroid = this.requestLocationPermissionAndroid.bind(this)
    this.state = {};

    if(Platform.OS === 'android') {
      this.requestLocationPermissionAndroid();
    }
    else {
      this.updateLocation();
    }
  }

  updateLocation = () => {
    Geolocation.getCurrentPosition(location => this.setState({ location }));
  }

  async requestLocationPermissionAndroid() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Berkeley Mobile Location Permission',
          message:
            'Berkeley Mobile would like to access your location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.updateLocation()
      } else {
        console.log('Permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }


  render() {
    return (
      <>
        <Map location = {this.state.location ? this.state.location.coords : {longitude: -122.2578, latitude: 37.8721}}/>
        <HomeV2 />
      </>
    );
  }
}
