import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

var monthNumbers = {
  'January': 0,
  'February': 1,
  'March': 2,
  'April': 3,
  'May': 4,
  'June': 5,
  'July': 6,
  'August': 7,
  'September': 8,
  'October': 9,
  'November': 10,
  'December': 11,
}
var months = Object.keys(monthNumbers);

var weekdayNumbers = {
  'Sunday': 0,
  'Monday': 1,
  'Tuesday': 2,
  'Wednesday': 3,
  'Thursday': 4,
  'Friday': 5,
  'Saturday': 6,
}
var weekdays = Object.keys(weekdayNumbers);

export default class Events extends Component {
  constructor(props) {
    super(props);

    this.date = new Date();
    this.state = {
      month: this.date.getMonth(),
      year: this.date.getFullYear(),
    };
    this.createCurrentMonthCalendar = this.createCurrentMonthCalendar.bind(this)
    this.createCurrentMonthCalendar();
  }

  createCurrentMonthCalendar() {
    let calendar = []
    let currentWeek = [0, 0, 0, 0, 0, 0, 0]
    let dt = new Date(this.state.year, this.state.month, 0) // day before this first of current month
    // fill up last month's dates
    while(dt.getDay() != 6) {
      currentWeek[dt.getDay()] = dt.getDate()
      dt.setDate(dt.getDate() - 1)
    }
    // current month
    dt = new Date(this.state.year, this.state.month)
    // fill current month dates
    while(dt.getMonth() == this.state.month) {
      currentWeek[dt.getDay()] = dt.getDate()
      // push to calendar and reset week if end of week
      if(dt.getDay() == 6) {
        calendar.push(currentWeek)
        currentWeek = [0, 0, 0, 0, 0, 0, 0]
      }
      dt.setDate(dt.getDate() + 1)
    }
    //fill in rest of week with next month
    if(dt.getDay() != 0) {
      while(dt.getDay() != 0) {
        currentWeek[dt.getDay()] = dt.getDate()
        dt.setDate(dt.getDate() + 1)
      }
      calendar.push(currentWeek)
    }
    console.log(calendar);
  }



  render() {
    return(
        <View style = {styles.container}>
          <View style = {styles.headingContainer}>
            <View style = {{width: "83%"}}>
              <Text style = {styles.heading}> Events </Text>
            </View>
          </View>
          <View style = {{flex: 0.85}}>
            <ScrollView contentContainerStyle = {{justifyContent: 'center'}}>
              <View style = {styles.infoContainer}>

              </View>
            </ScrollView>
          </View>
        </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: 'rgb(250,250,250)',
 },
 headingContainer: {
   flex: 0.15,
   alignItems: 'center',
   justifyContent: 'flex-end'
 },
 heading: {
   fontWeight: 'bold',
   fontSize: 28,
 },
 infoContainer: {
   width: "90%",
   backgroundColor: "rgb(255,255,255)",
   opacity: 0.96,
   borderRadius: 12,
   marginTop: 10,
   padding: 20,
   marginLeft: "5%",
   alignItems: "center",
   shadowColor: 'rgba(0,0,0,0.24)',
   shadowOffset: { width: 0, height: -1 },
   shadowOpacity: 0.8,
   shadowRadius: 2,
   elevation: 2
 },
});
