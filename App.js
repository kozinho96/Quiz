import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity, StatusBar} from 'react-native';
import {Navigation} from 'react-native-navigation';
import SplashScreen from 'react-native-splash-screen';
import { AsyncStorage } from "react-native"
import Regulations from './screens/Regulations';


export default class App extends Component {
componentDidMount() {
  SplashScreen.hide();
}

displayData  = async () => {
  try {
   this.newScreen('Regulations')
  }
  catch (error) {
    alert(error);
  }
}

  newScreen = (screen) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screen
      }
    })
  }

  goToDrawer = (screen) => {
    Navigation.mergeOptions('drawerId', {
      sideMenu: {
        left: {
          visible: true
        },
      }
    });
  }

  render() {
    return (

      <View style={styles.container}>
      <StatusBar
        backgroundColor="#4f6d7a"
        barStyle="light-content"
      />
      <View style={styles.toolbar}><Text>QUIZ</Text></View>
      <View style={styles.drw}>
          <TouchableOpacity style={styles.drw} onPress={()=> this.goToDrawer('Drawer')}><Image source={require('./img/menu.svg.png')} /></TouchableOpacity>
      </View>
        <Button title="Tests" color='#008000' onPress={()=> this.newScreen('Tests')}></Button>
        <Button title="Results" color='#008000' onPress={()=> this.newScreen('Results')}></Button>
        <Text style={styles.OpenSans}>Jakiś tekstg</Text>
        <Text>Jakiś tekstg</Text>
            <Regulations pagekey={"uniquekey"} title={"Regulamin"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#4f6d7a'
  },
  toolbar: {
    flex: 1/10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  drw: {
    flex: 1/5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'gray',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#F5FCFF'
  },
  OpenSans: {
    fontFamily: 'OpenSans-Regular'
  },
  instructions: {
    textAlign: 'center',
    color: '#F5FCFF',
    marginBottom: 5,
  },
});
