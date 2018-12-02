import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';


export default class Drawer extends Component {


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

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.quiz}>Quiz App</Text>
        <Image
          style={styles.obrazek}
          source={{uri: 'http://pluto.uploadfile.pl/pobierz/1570529---ospk/5316677400_1326980696.jpg'}}
        />
        <TouchableOpacity style={styles.button} onPress={()=> this.newScreen('App')}></TouchableOpacity>
        <Button title="Tests" color='#1A539F' onPress={()=> this.newScreen('Tests')}></Button>
        <Button title="Results" color='#1A539F' onPress={()=> this.newScreen('Results')}></Button>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#4f6d7a',
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
    color: 'red'
  }
});
