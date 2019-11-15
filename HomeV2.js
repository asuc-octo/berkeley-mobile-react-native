import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  TextInput,
  TouchableHighlight
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
        this.setState({user_name: 'Edit status here...'})
      }
    } catch(e) {
      this.setState({user_name: 'Edit status here...'})
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
        draggableRange={{top: height-30, bottom: 100}}
        animatedValue={this._draggedValue}
        snappingPoints = {[100, height-30]}
        showBackdrop={true}>
        {dragHandler => (
        <View style={styles.panel}>
          <View style={styles.panelHeader} {...dragHandler}>
            <View style = {styles.slider}></View>
            <View style = {{marginRight: 'auto'}}>
                <TextInput
                      style = {styles.status}
                      onChangeText={text => {
                        this.setState({user_name: text});
                        this.storeName(text);
                      }}
                      value={this.state.user_name}
                    />
            </View>
          </View>
          <View style={[styles.container, {backgroundColor: '#f0eee4'}]}>
            <View style = {{flexDirection: 'row', justifyContent: "space-around"}}>
              <TouchableHighlight
                style={styles.campusScreens}
                onPress = {() => NavigationService.navigate('Libraries')}
                underlayColor={styles.campusScreens.backgroundColor}>
                  <Text style={styles.campusText}>Libraries</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.campusScreens}
                onPress = {() => NavigationService.navigate('DiningHalls')}
                underlayColor={styles.campusScreens.backgroundColor}>
                  <Text style={styles.campusText}>Dining</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.campusScreens}
                onPress = {() => NavigationService.navigate('Gyms')}
                underlayColor={styles.campusScreens.backgroundColor}>
                  <Text style={styles.campusText}>Fitness</Text>
              </TouchableHighlight>
            </View>
            <View style = {{flex: 1, zIndex: 5005}}>
              <CampusContainer style = {{zIndex: 5000}} ref={navigatorRef => {
                NavigationService.setCampusNavigator(navigatorRef);
              }}/>
            </View>
          </View>
        </View>)}
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
   height: 100,
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
   borderRadius: 20,
 },
 campusScreens:{
   marginRight: 40,
   marginLeft: 40,
   marginTop: 10,
   paddingTop: 20,
   paddingBottom: 20,
   backgroundColor: '#f0eee4',
 },
 status: {
   color: '#C4820F',
   fontSize: 24,
   paddingLeft: 30,
   fontFamily: 'sans-serif-light',
   letterSpacing: 3,
 }
})
