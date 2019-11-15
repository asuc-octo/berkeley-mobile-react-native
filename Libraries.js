import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, ScrollView, Image, FlatList} from 'react-native';

import LibraryCard from './libraryCard.js';

const libraryData = require('./data/libraries.json')

export default class Libraries extends Component{
  render() {
    return(
      <ScrollView  contentContainerStyle={{flexGrow: 1, justifyContent: "center"}}>
        <View style = {styles.studySpots}>
          <View style = {styles.studySpotHeader}>
            <Image style = {styles.bookIcon} source={{uri: 'https://image.flaticon.com/icons/png/512/130/130304.png'}}/>
            <Text style = {styles.heading}>Find your study spot</Text>
          </View>
          <View style = {styles.cardDeck}>
            {libraryData.map((prop, key) => {
              return (
                <LibraryCard style={styles.card}  key={key} data = {prop}/>
              );
            })}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  studySpots: {
    // height: 600,
    width: "80%",
    backgroundColor: "#f6f4f1",
    borderRadius: 25,
    // position: "absolute",
    // right: "10%",
    marginTop: 10,
    padding: 20,
    marginLeft: "9%",
    alignItems: "center"
  },
  studySpotHeader: {
    flexDirection: 'row',
    justifyContent: "center"
  },
  bookIcon: {
    width: 30,
    height: 30,
    marginRight: 20
  },
  cardDeck: {
    marginTop: 40,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1.1,
  }
})
