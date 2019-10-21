import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';


const {height} = Dimensions.get('window')


export default class HomeV2 extends Component{
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return(
      <SlidingUpPanel
        ref={c => (this._panel = c)}
        draggableRange={{top: height-30, bottom: 120}}
        animatedValue={this._draggedValue}
        showBackdrop={true}>
        <View style={styles.panel}>
          <View style={styles.panelHeader}>
            <View style = {styles.slider}></View>
            <View style = {{marginRight: 250}}>
              <Text style={{color: '#FFF', fontSize: 24, fontFamily: 'sans-serif-light'}}>Hi Akshat!</Text>
            </View>
          </View>
          <View style={styles.container}>
            <Text>Bottom Sheet Content</Text>
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
   alignItems: 'center',
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
   backgroundColor: '#b197fc',
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
