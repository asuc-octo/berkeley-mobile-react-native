import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  TextInput
} from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import AsyncStorage from '@react-native-community/async-storage';


import Libraries from './Libraries'
import DiningHalls from './DiningHalls'
import Gyms from './Gyms'
import NavigationService from './NavigationService';



const {height} = Dimensions.get('window')


const CampusStack = createAnimatedSwitchNavigator(
  {
    Libraries: Libraries,
    DiningHalls: DiningHalls,
    Gyms: Gyms,
  },
  {
    initialRouteName: 'Libraries',
    // The previous screen will slide to the bottom while the next screen will fade in
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-left"
          durationMs={800}
          interpolation="linear"
        />
        <Transition.In
          type="slide-right"
          durationMs={300}
        />
      </Transition.Together>
    ),
  }
);

const CampusContainer = createAppContainer(CampusStack)

export default class HomeV2 extends Component{

  constructor(props) {
    super(props);

    this.state = {user_name: 'Loading...'};
    this.getName = this.getName.bind(this)
    this.storeName = this.storeName.bind(this)
    this.getName()
  }

  getName = async () => {
    try {
      const value = await AsyncStorage.getItem('@status')
      if(value !== null) {
        this.setState({user_name: value})
        return value
      }
      else {
        this.setState({user_name: 'Edit Status Here'})
      }
    } catch(e) {
      this.setState({user_name: 'Edit Status Here'})
    }
  }

  storeName = async new_status => {
    try {
      await AsyncStorage.setItem('@status', new_status)
    } catch (e) {
        // saving error
    }
  }

  render() {
    return(
      <SlidingUpPanel
        ref={c => (this._panel = c)}
        draggableRange={{top: height-30, bottom: 120}}
        animatedValue={this._draggedValue}
        snappingPoints = {[120, height-30]}
        showBackdrop={true}>
        <View style={styles.panel}>
          <View style={styles.panelHeader}>
            <View style = {styles.slider}></View>
            <View style = {{marginRight: 200}}>
                <TextInput
                      style = {{color: '#C4820F', fontSize: 24, fontFamily: 'sans-serif-light'}}
                      onChangeText={text => {
                        this.setState({user_name: text});
                        this.storeName(text);
                      }}
                      value={this.state.user_name}
                    />
            </View>
          </View>
          <View style={styles.container}>
            <View style = {{flexDirection: 'row'}}>
              <Button title = 'Libraries' onPress = {() => NavigationService.navigate('Libraries')} />
              <Button title = 'DiningHalls' onPress = {() => NavigationService.navigate('DiningHalls')} />
              <Button title = 'Gyms' onPress = {() => NavigationService.navigate('Gyms')} />
            </View>
            <View style = {{flex: 1, zIndex: 5005}}>
              <CampusContainer style = {{zIndex: 5000}} ref={navigatorRef => {
                NavigationService.setCampusNavigator(navigatorRef);
              }}/>
            </View>
          </View>
        </View>
      </SlidingUpPanel>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#f8f9fa',
   justifyContent: 'center'
 },
 panel: {
   flex: 1,
   backgroundColor: 'white',
   borderTopRightRadius: 50,
   borderTopLeftRadius: 50,
   position: 'relative'
 },
 panelHeader: {
   height: 120,
   backgroundColor: '#003262',
   color: '#C4820F',
   borderTopRightRadius: 50,
   borderTopLeftRadius: 50,
   alignItems: 'center',
   justifyContent: 'space-around'
 },
 slider: {
   height: 5,
   width: 30,
   backgroundColor: 'white',
 }
})
