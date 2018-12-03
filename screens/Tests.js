import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {Navigation} from 'react-native-navigation';


newScreen = (screen) => {
  Navigation.mergeOptions('drawerId', {
    sideMenu: {
      left: {
        visible: true
      }
    }
  })
  Navigation.push('MAIN_STACK',{
    component: {
      name: screen
    }
  })
}


export default class Tests extends Component {
  render() {

    var tests = [
      {
          question: 'Jak masz na imie?',
          answerA: 'Krzysiek',
          answerB: 'Tomek',
          answerC: 'Rafał',
          answerD: 'Adrian'
      }, 
      {
        question: 'Kto wygra mecz?',
        answerA: 'Polska',
        answerB: 'Niemcy',
        answerC: 'Anglia',
        answerD: 'Rosja'
    }
    ]

    return (
      <View style={styles.container}>
        <View style={styles.toolbar}><Text style={styles.textTab}>TESTS</Text></View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*justifyContent: 'center',
    alignItems: 'center',*/
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  toolbar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#60A510',
    height: 50,
  },
      textTab: {
      fontWeight: 'bold',
      textAlign: 'center',
    },
});
