import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';


export default class Drawer extends Component {


  newScreen = (screen) => {
    Navigation.mergeOptions('drawerId', {
      sideMenu: {
        left: {
          visible: false
        }
      }
    })
    Navigation.push('MAIN_STACK',{
      component: {
        name: screen
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.quiz}>Quiz App</Text>
        <Image
          style={styles.obrazek}
          source={{uri: 'http://pluto.uploadfile.pl/pobierz/1570529---ospk/5316677400_1326980696.jpg'}}
        />
        <TouchableOpacity style={styles.button} onPress={()=> this.newScreen('App')}>
          <Text>Home Page</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=> this.newScreen('Results')}>
          <Text>Results</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=> this.newScreen('Tests')}>
          <Text>Tests</Text>
        </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#60A510',
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
  quiz: {
    fontSize: 30,
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center'
  },
  obrazek: {
    width: 100, 
    height: 100, 
    justifyContent: 'center',
    marginLeft: 100
  },
  button: {
    marginLeft: 50,
    height: 43, 
    width: 200,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: 'silver',
    padding: 10,
    borderWidth: 2
  },
});
