import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity,ActivityIndicator, ListView} from 'react-native';
import {Navigation} from 'react-native-navigation';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';



export default class Drawer extends Component {
  constructor() {
    super();
    this.state = {
        isLoading: true,
        clonedResults: [],
        refreshing: false,
    };
}
componentDidMount() {
  fetch("https://pwsz-quiz-api.herokuapp.com/api/tests")
      .then((response) => response.json())
      .then((responseJson) => {
          var standardDataSource = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
          this.setState({
              isLoading: false,
              clonedResults: standardDataSource.cloneWithRows(responseJson)
          })
      })
}



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
    if(this.state.isLoading){
      return(
          <View>
              <ActivityIndicator />
          </View>
      )
    }
    return (
      <View style={styles.container}>
        <Text style={styles.quiz}>Quiz App</Text>
        <Image
          style={styles.obrazek}
          source={{uri: 'http://pluto.uploadfile.pl/pobierz/1570529---ospk/5316677400_1326980696.jpg'}}
        />
        <TouchableOpacity style={styles.button} onPress={()=> this.newScreen('App')}>
          <Text style={styles.hpTxt}>Home Page</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=> this.newScreen('Results')}>
          <Text style={styles.hpTxt}>Results</Text>
        </TouchableOpacity>
        <View style={{marginTop: 10, borderBottomColor: 'black', borderBottomWidth: 3,}}/>
        
        <ListView
        dataSource = {this.state.clonedResults}
        renderRow = {
        (rowData) => 
        <TouchableOpacity style={styles.button} onPress={()=> this.newScreen('Tests')}>
          <Text style={styles.txtBig}>{rowData.name}</Text>
        </TouchableOpacity>
        }>
        </ListView>


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
    marginLeft: 28,
    height: 53, 
    width: 240,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 5,
    borderWidth: 2,
    borderRadius: 5
  },
  buttonBig: {
    marginLeft: 28,
    height: 63, 
    width: 240,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 2,
    borderRadius: 5
  },
  txtBig: {
    textAlign: 'center',
    alignItems: 'center'
  },
  hpTxt: {
    marginTop: 10
  }
});
