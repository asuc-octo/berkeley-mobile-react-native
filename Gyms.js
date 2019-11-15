import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Locations from './Locations';

const locationData = require('./data/fitnessCenters.json')

export default class Gyms extends Component{
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return(
      <ScrollView  contentContainerStyle={{flexGrow: 1, justifyContent: "center"}}>
        <Locations heading = {"Fitness Centers"} data = {locationData} iconImage = {"https://image.flaticon.com/icons/png/512/130/130304.png"} />
      </ScrollView>
    );
  }
}
