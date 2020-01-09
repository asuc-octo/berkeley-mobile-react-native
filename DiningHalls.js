import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Locations from './Locations';

import { firebase } from '@react-native-firebase/firestore';


export default class DiningHalls extends Component{
  constructor(props) {
    super(props);

    this.prepareDiningData = this.prepareDiningData.bind(this)
    this.state = {}

  }

  async prepareDiningData() {
    try {
      const allData = await firebase.firestore()
      .collection('Dining Halls and Cafes')
      .get()

      let diningData = []
      allData.docs.forEach((d,i)=> {
        if(Object.keys(d._data).length > 0) {
            let loc = d._data
            diningData.push({"name": loc.name, "latitude": loc.latitude, "longitude": loc.longitude, "occupancy": "Low", "type": "Cafe", "image": "https://caldining.berkeley.edu/sites/default/files/images/graphics/ck2-100.jpg"})
        }
      });

      const diningHalls = await firebase.firestore()
        .collection('Dining Halls and Cafes')
        .doc('Dining Halls')
        .collection('2019-09-20')
        .get()

      console.log(diningHalls.docs)



      return diningData

    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return(
      <ScrollView  contentContainerStyle={{flexGrow: 1, justifyContent: "center"}}>
        <Locations heading = {"Hello u need food"} prepareData = {this.prepareDiningData} iconImage = {"https://image.flaticon.com/icons/png/512/130/130304.png"} />
      </ScrollView>
    );
  }
}
