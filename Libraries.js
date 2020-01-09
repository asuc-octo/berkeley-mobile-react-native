import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Locations from './Locations';

import { firebase } from '@react-native-firebase/firestore';



export default class Libraries extends Component{
  constructor(props) {
    super(props);
    this.prepareLibraryData = this.prepareLibraryData.bind(this);

    this.state = {};
  }

  async prepareLibraryData() {
    try {
      const firebaseLibraryData = await firebase.firestore()
      .collection('Libraries')
      .get()

      let libraryData = []
      firebaseLibraryData.docs.forEach((d,i)=> {
        if(Object.keys(d._data).length > 0) {
            let loc = d._data
            loc.longitude = loc.longitude > 0 ? -loc.longitude : loc.longitude

            libraryData.push({"name": loc.name, "latitude": loc.latitude, "longitude": loc.longitude, "occupancy": "Low", "type": "Cafe", "image": loc.picture})
        }
      });

      return libraryData

    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return(
      <ScrollView  contentContainerStyle={{flexGrow: 1, justifyContent: "center"}}>
        <Locations heading = {"Find your study spot"} prepareData = {this.prepareLibraryData} iconImage = {"https://image.flaticon.com/icons/png/512/130/130304.png"} />
      </ScrollView>
    );
  }
}
