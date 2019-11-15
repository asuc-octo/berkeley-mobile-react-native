import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class DiningHalls extends Component{
  render() {
    return(
      <View style = {styles.container}>
        <Text>Dining Halls Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
