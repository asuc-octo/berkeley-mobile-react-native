import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Locations from './Locations';

const locationData = require('./data/diningHalls.json')

export default class DiningHalls extends Component{
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return(
      <ScrollView  contentContainerStyle={{flexGrow: 1, justifyContent: "center"}}>
        <Locations heading = {"Hello u need food"} data = {locationData} iconImage = {"https://image.flaticon.com/icons/png/512/130/130304.png"} />
      </ScrollView>
    );
  }
}
