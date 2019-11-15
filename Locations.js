import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import LocationCard from './LocationCard';

export default class Locations extends Component{
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return(
        <View style = {styles.infoContainer}>
          <View style = {styles.infoHeader}>
            <Image style = {styles.infoIcon} source={{uri: this.props.iconImage}}/>
            <Text style = {styles.heading}>{this.props.heading}</Text>
          </View>
          <View style = {styles.cardDeck}>
            {this.props.data.map((prop, key) => {
              return (
                <LocationCard style={styles.card}  key={key} data = {prop}/>
              );
            })}
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  infoContainer: {
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
  infoHeader: {
    flexDirection: 'row',
    justifyContent: "center"
  },
  infoIcon: {
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
