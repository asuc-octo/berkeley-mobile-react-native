import React, {Component} from 'react';

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
      <>
        <Map location = {this.state.location ? this.state.location.coords : {longitude: -122.2578, latitude: 37.8721}}/>
        <HomeV2 />
      </>
    );
  }
}
