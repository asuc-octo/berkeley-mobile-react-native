import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import Home from './Home.js';
import Resources from './Resources';
import Events from './Events';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

const TabApp = createAppContainer(createMaterialTopTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            style = {{width: 20, height: 30}}
            source = {{uri: "https://cdn1.iconfinder.com/data/icons/navigation-7/32/house-01-512.png"}}
          />
        )
      }
    },
    Resources: {
      screen: Resources,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            style = {{width: 20, height: 30}}
            source = {{uri: "https://cdn4.iconfinder.com/data/icons/basics-set-2/100/Question-512.png"}}
          />
        )
      }
    },
    Events: {
      screen: Events,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            style = {{width: 20, height: 30}}
            source = {{uri: "https://cdn4.iconfinder.com/data/icons/date-and-time-3/32/495-01-512.png"}}
          />
        )
      }
    },
  },
  {
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: 'white'
      }
    }
  }
));

// export default TabApp
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return(
      <View style={styles.container}>
        <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />
        <TabApp />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   // backgroundColor: '#f8f9fa',
   // alignItems: 'center',
   justifyContent: 'center'
 }
});
