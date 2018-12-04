import React, {Component} from 'react';
import {Button, Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class Score extends Component{

    newScreen = (screen) => {
        Navigation.push(this.props.componentId, {
          component: {
            name: screen
          }
        })
      }

      goToDrawer = () => {
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
        <View style={styles.toolbar}>
             <TouchableOpacity style={styles.drw} onPress={()=> this.goToDrawer()}><Image source={require('../img/menu.svg.png')} /></TouchableOpacity>
             <Text style={styles.textTab}>SCORE</Text>
        </View>
        <View style={styles.cnt}>
                <Text style={styles.txtScore}>Your Score</Text>
                <Text style={styles.txtScore}>3</Text>

        <View style={styles.bottom}>
        <Text style={styles.txtBottom}>Send and get to know your ranking result</Text>
        <TouchableOpacity style={styles.button} onPress={()=> this.newScreen('Results')}>
          <Text>Send and Check!</Text>
        </TouchableOpacity>
            </View>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: 'white'
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
    toolbar: {
        backgroundColor: '#60A510',
        alignItems: 'stretch',
        flexDirection: 'row',
      },
    drw: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#60A510',
        height: 50
    },
    textTab: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginLeft: 100,
        marginTop: 12,
        fontSize: 20
    },
    button: {
        marginLeft: 90,
        height: 43, 
        width: 160,
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderWidth: 2,
        borderRadius: 5
    },
    bottom: {
        borderWidth: 2,
        padding: 5,
    },
    cnt: {
        justifyContent: 'center',
        flex: 1
    },
    txtBottom: {
        fontSize: 15,
        fontFamily: 'OpenSans-Bold',
        textAlign: 'center'
    },
    txtScore: {
        textAlign: 'center',
        fontFamily: 'OpenSans-Bold',
        color: '#60A510',
        fontSize: 30
    }
});
