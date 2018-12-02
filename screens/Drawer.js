import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
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
        
        <Button title="Home Page" color='#008000' onPress={()=> this.newScreen('App')}></Button>
        <Button title="Tests" color='#008000' onPress={()=> this.newScreen('Tests')}></Button>
        <Button title="Results" color='#008000' onPress={()=> this.newScreen('Results')}></Button>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AB67AB',
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
});
