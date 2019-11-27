import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Image, Linking, Alert, Platform, TouchableOpacity} from 'react-native';

export default class ResourceCard extends Component {
  constructor(props) {
    super(props);

    this.callNumber = this.callNumber.bind(this);
    this.state = {};
  }

  categoryColor = {
    "Health": "rgb(255, 77, 77)",
    "Academics": "rgb(114, 151, 230)",
    "Security": "rgb(210, 95, 223)",
    "Legal": "rgb(247, 148, 106)",
    "Finances": "rgb(92, 198, 175)"
  }

  callNumber(phone) {
    let phoneNumber = phone;
    if (Platform.OS !== 'android') {
      phoneNumber = `telprompt:${phone}`;
    }
    else  {
      phoneNumber = `tel:${phone}`;
    }
    Linking.canOpenURL(phoneNumber)
      .then(supported => {
        if (!supported) {
          Alert.alert('Phone number is not available');
        } else {
          return Linking.openURL(phoneNumber);
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <View style = {styles.container}>
        <View style = {{flex: 2}}>
          <Text style = {[{fontSize: (17 > this.props.data.name.length ? 15: 10)}, styles.locationName]}>{this.props.data.name}</Text>
          <View style = {styles.detInfo}>
            <ScrollView horizontal alwaysBounceHorizontal style ={{width: "60%", marginRight: 5}}>
              {this.props.data.categories.map((prop, key) => {
                return(
                  <View key = {key} style = {[{backgroundColor: this.categoryColor[prop]}, styles.categoryLabel]}>
                    <Text style = {styles.categoryText}>{prop}</Text>
                  </View>
                );
              })}
            </ScrollView>
            <View style = {{flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', flex: 2}}>
              <TouchableOpacity  onPress = {() => this.callNumber(this.props.data.phone)}>
                <Image style = {{width: 18, height: 18, opacity: 0.82}}
                    source = {{uri: "https://www.stickpng.com/assets/thumbs/5a4525b2546ddca7e1fcbc82.png"}}
                />
              </TouchableOpacity>
              <Image style = {{width: 24, height: 24, opacity: 0.82}}
                  source = {{uri: "https://cdn0.iconfinder.com/data/icons/marketing-essential/48/v-12-512.png"}}
              />
            </View>
          </View>
        </View>
        <Image style = {styles.locationImage} source = {{uri: this.props.data.image}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      width: "93%",
      height: 88,
      borderRadius: 6,
      marginTop: 14,
      backgroundColor: 'rgb(255,255,255)',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      shadowColor: 'rgba(0,0,0,0.24)',
      shadowOffset: { width: 0, height: -1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 7
  },
  locationName: {
    flex: 2,
    paddingLeft: 15,
    paddingTop: 20,
    fontWeight: 'bold',
    color: "rgb(44,44,45)",
    letterSpacing: 1.2
  },
  locationImage: {
    height: "90%",
    marginRight: 5,
    width: 100,
  },
  detInfo: {
    flexDirection: 'row',
    flex: 1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 15,
    marginLeft: 6,
  },
  categoryLabel: {
    height: 18,
    borderRadius: 21.5,
    opacity: 0.89,
    marginLeft: 3.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 8.75,
    fontWeight: 'bold',
    color: "white",
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4
  }
})
