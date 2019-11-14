import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Gym extends Component{
  render() {
    console.log('gyms')
    return(
      <View style = {styles.container}>
        <Text>Gym Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
