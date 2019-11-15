import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class LibraryCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return(
      <View style = {styles.container}>
        <View style = {{flex: 2}}>
          <Text style = {styles.libraryName}>{this.props.data.name}</Text>
          <View style = {styles.libraryInfo}>
            <Image
              style = {{width: 20, height: 30}}
              source = {{uri: "https://cdn3.iconfinder.com/data/icons/vehicles-and-transportation-icon-set/434/walking-simple-black-icon-512.png"}}
            />
            <Text >{this.props.data.latitude}</Text>
            <Image
              style = {{width: 25, height: 30}}
              source = {{uri: "https://static.thenounproject.com/png/1214872-200.png"}}
            />
            <Text >{this.props.data.occupancy}</Text>
          </View>
        </View>
        <Image style = {styles.libraryImage} source = {{uri: this.props.data.image}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      width: 300,
      height: 90,
      borderRadius: 10,
      marginTop: 15,
      backgroundColor: '#fffff0',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',

  },
  libraryName: {
    flex: 2,
    paddingLeft: 15,
    paddingTop: 20,
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 1.2
  },
  libraryImage: {
    borderRadius: 10,
    height: 80,
    marginRight: 5,
    width: 100,
  },
  libraryInfo: {
    flexDirection: 'row',
    flex: 1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
})
