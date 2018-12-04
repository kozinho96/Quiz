import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity, StatusBar, ScrollView} from 'react-native';
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

      <ScrollView style={styles.container}>
      <StatusBar
        backgroundColor="#4f6d7a"
        barStyle="light-content"
      />
      <View style={styles.toolbar}>
      <TouchableOpacity style={styles.drw} onPress={()=> this.goToDrawer()}><Image source={require('./img/menu.svg.png')} /></TouchableOpacity>
      <Text style={styles.textTab}>HOME PAGE</Text>
      </View>
    


        <TouchableOpacity style={styles.buttonTest} onPress={()=> this.newScreen('Tests')}>
          <Text style={styles.title}>Zagadki matematyczne</Text>
          <Text></Text>
          <Text style={styles.tags}>#matematyka</Text>
          <Text></Text>
          <Text style={styles.description}>Bardzo szybki test sprawdzający podstawową wiedze z matematyki.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonTest} onPress={()=> this.newScreen('Tests')}>
          <Text style={styles.title}>Moda na sukces</Text>
          <Text></Text>
          <Text style={styles.tags}>#tv #tasiemiec #serial</Text>
          <Text></Text>
          <Text style={styles.description}>Quiz z najważniejszych wydarzeń serialu.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonTest} onPress={()=> this.newScreen('Tests')}>
          <Text style={styles.title}>Tranzystor bipolarny i polowy</Text>
          <Text></Text>
          <Text style={styles.tags}>#elektronika #fizyka</Text>
          <Text></Text>
          <Text style={styles.description}>Test sprawdzający podstawową wiedzę z zakresu elektroniki, związany z transytorami bipolarnymi i polowymi.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonTest} onPress={()=> this.newScreen('Tests')}>
          <Text style={styles.title}>Wodzowie i dowódcy starożytnego Rzymu</Text>
          <Text></Text>
          <Text style={styles.tags}>#historia #starożytnyRzym</Text>
          <Text></Text>
          <Text style={styles.description}>Konkretnym nazwiskom przyporządkuj odpowiednie wydarzenia.</Text>
        </TouchableOpacity>


        



      <View><Text></Text></View>
        <View style={styles.bottom}>
        <Text style={styles.txtBottom}> Get to know your ranking result</Text>
        <TouchableOpacity style={styles.button} onPress={()=> this.newScreen('Results')}>
          <Text>Check!</Text>
        </TouchableOpacity>
        </View>
            <Regulations pagekey={"uniquekey"} title={"Regulamin"} description={"1. Z Aplikacji mogą korzystać pełnoletnie osoby fizyczne, będące konsumentami w rozumieniu art. 22 (1) ustawy z dnia 23 kwietnia 1964 r. Kodeks cywilny, zwane dalej Użytkownikami. \n\n2. Użytkownik może pobrać Aplikację na swoje urządzenie mobilne w dowolnej chwili. Po pobraniu Aplikacji, Użytkownik może ją zainstalować na swoim urządzeniu przenośnym. Za pobranie Aplikacji lub jej zainstalowanie nie są pobierane opłaty. \n\n3. W celu pobrania, zainstalowania oraz korzystania z Aplikacji, z zastrzeżeniem pkt. 6 poniżej, Użytkownik powinien posiadać dostęp do Internetu."}/>
        </ScrollView>
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
  textTab: {
    fontWeight: 'bold',
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 80,
    marginTop: 12,
    fontSize: 20
  },
  bottom: {
    borderWidth: 2,
    padding: 5
  },
  txtBottom: {
    fontSize: 17,
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center'
  },
  buttonTest: {
    marginLeft: 30,
    height: 150, 
    width: 300,
    marginTop: 10,
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 2,
    borderRadius: 5
  },
  title: {
    fontFamily: 'OpenSans-Bold',
  },
  tags: {
    fontFamily: 'OpenSans-Regular',
    color: '#5381F2'
  },
  description: {
    fontFamily: 'OpenSans-Regular',
  }
});
