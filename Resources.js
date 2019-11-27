import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import resourceData from './data/resourceLocations.json';
import ResourceCard from './ResourceCard.js';


export default class Resources extends Component {
  constructor(props) {
    super(props);

    this.state = { resourceData };
  }

  render() {
    // {this.state.data.map((prop, key) => {
      //   return (
        //     <LocationCard style={styles.card} sortDistance = {this.sortDataByDistance} sortOccupancy = {this.sortDataByOccupancy} key={key} data = {prop}/>
        //   );
        // })}
        // <ScrollView  contentContainerStyle={{flexGrow: 0.8, justifyContent: "center"}}>
    return(
        <View style = {styles.container}>
          <View style = {styles.headingContainer}>
            <View style = {{width: "83%"}}>
              <Text style = {styles.heading}> What do you need? </Text>
            </View>
          </View>
          <View style = {{flex: 0.85}}>
            <ScrollView contentContainerStyle = {{justifyContent: 'center'}}>
              <View style = {styles.infoContainer}>
                  <View>
                    {this.state.resourceData.map((resource, key) => {
                      return(
                        <ResourceCard key = {key} data = {resource}/>
                      );
                    })}
                  </View>
              </View>
            </ScrollView>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: 'rgb(250,250,250)',
 },
 headingContainer: {
   flex: 0.15,
   alignItems: 'center',
   justifyContent: 'flex-end'
 },
 heading: {
   fontWeight: 'bold',
   fontSize: 28,
 },
 infoContainer: {
   width: "90%",
   backgroundColor: "rgb(255,255,255)",
   opacity: 0.96,
   borderRadius: 12,
   marginTop: 10,
   padding: 20,
   marginLeft: "5%",
   alignItems: "center",
   shadowColor: 'rgba(0,0,0,0.24)',
   shadowOffset: { width: 0, height: -1 },
   shadowOpacity: 0.8,
   shadowRadius: 2,
   elevation: 2
 },
});
