import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Libraries extends Component{
  render() {
    console.log('libraries')
    return(
      <View style = {styles.container}>
        <Text>Libraries Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
