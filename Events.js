import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return(
      <View style = {styles.container}>
        <Text> Hi, this is events </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#f8f9fa',
   alignItems: 'center',
   justifyContent: 'center'
 }
});
