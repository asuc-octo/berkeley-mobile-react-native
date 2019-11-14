import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Button,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import SlidingUpPanel from 'rn-sliding-up-panel';
import Map from './Map.js';
import HomeV2 from './HomeV2.js'

export default class Home extends Component{
  constructor(props) {
    super(props);

    this.updateLocation = this.updateLocation.bind(this)
    this.state = {};
    this.updateLocation()
  }

  updateLocation = () => {
    Geolocation.getCurrentPosition(location => this.setState({ location }));
  }


  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />
        <Map location = {this.state.location ? this.state.location.coords : {longitude: -122.2578, latitude: 37.8721}}/>
        <HomeV2 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#f8f9fa',
   alignItems: 'center',
   justifyContent: 'center'
 }
});
