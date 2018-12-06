import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class Tests extends Component {

  constructor() {
    super();
    this.state = {
        refreshing: false,
    };

    this.currentQuestion = 0;
    this.testLength = 3;
    this.score = 0;
}

_onRefresh = () => {
    this.setState({refreshing: true});
    // this.fetchData().then(() => {
    // });
    setTimeout(()=> {
        this.currentQuestion++;
        this.setState({refreshing: false});

    }, 500)
};

next = () => {
    if(this.testLength === this.currentQuestion){
        this.sendResult();
        Navigation.push('MAIN_STACK',{
            component: {
                name: 'Score'
            }
        })
    }else{
        this.score++;
        this._onRefresh();
    }

};

goToDrawer = () => {
    Navigation.mergeOptions('drawerId', {
      sideMenu: {
        left: {
          visible: true
        },
      }
    });
  }

  sendResult = () => {
      fetch('https://pwsz-quiz-api.herokuapp.com/api/results', {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              nick: "Krzychu",
              score: 7,
              total: 10,
              type: "chemia",
              date: "2018-12-06"
          })
      });
  }



render() {

  var test1 = [
      {
          question: 'Dwie liczby dwucyfrowe różnią się od siebie o 5; obie są podzielne przez 5; ich suma podniesiona do kwadratu jest liczbą, którą otrzymamy pisząc te liczby obok siebie. Jakie to liczby?',
          answer_A: '40 i 25 lub 45 i 25.',
          answer_B: '20 i 25 lub 35 i 25.',
          answer_C: '30 i 25 lub 20 i 25.',
          answer_D: '15 i 20 lub 20 i 25.',
          goodAnswer: 'c'
      },
      {
          question: 'Jak masz na imię?',
          answer_A: 'Krzysiek',
          answer_B: 'Tomek',
          answer_C: 'Rafał',
          answer_D: 'Grzesiek',
          goodAnswer: 'b'
      },
      {
          question: 'Jaka to liczba? Po dodaniu do niej jej połowy i wyciągnięciu pierwiastka kwadratowego otrzymujemy jej połowę.',
          answer_A: '9',
          answer_B: '6',
          answer_C: '12',
          answer_D: '16',
          goodAnswer: 'c'
      },
      {
          question: 'W pewnej jamie żyły smoki czerwone i smoki zielone. Każdy czerwony smok miał 6 głów,8 nóg i 2 ogony. Każdy zielony smok miał 8 głów, 6 nóg i 4 ogony. Wszystkich ogonów było 44, a zielonych nóg było o 6 mniej niż czerwonych głów. Ile czerwonych smoków żyło w tej jamie?',
          answer_A: '8',
          answer_B: '4',
          answer_C: '12',
          answer_D: '6',
          goodAnswer: 'b'
      }
  ];



return (
  <View style={styles.container}>
            <View style={styles.toolbar}>
      <TouchableOpacity style={styles.drw} onPress={()=> this.goToDrawer()}><Image source={require('../img/menu.svg.png')} /></TouchableOpacity>
      <Text style={styles.textTab}>TESTS</Text>
      </View>
      
      <View>
          <Text style={styles.test3}>Pytanie {this.currentQuestion + 1} z {test1.length}</Text>
          <Text style={{color:'black'}} style={styles.test2}>{test1[this.currentQuestion].question}</Text>

    <TouchableOpacity style={styles.buttonTests} onPress={() => this.next()}> 
        <Text> {test1[this.currentQuestion].answer_A} </Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonTests} onPress={() => this.next()}> 
        <Text> {test1[this.currentQuestion].answer_B} </Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonTests} onPress={() => this.next()}> 
        <Text> {test1[this.currentQuestion].answer_C} </Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonTests} onPress={() => this.next()}> 
        <Text> {test1[this.currentQuestion].answer_D} </Text>
    </TouchableOpacity>
    </View>
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
    backgroundColor: '#60A510',
    alignItems: 'stretch',
    flexDirection: 'row',
  },
  textTab: {
    fontWeight: 'bold',
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 90,
    marginTop: 12,
    fontSize: 20
  },
    drw: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#60A510',
        height: 50
      },
      test2: {
          textAlign: 'center',
          fontFamily: 'OpenSans-Regular',
          fontSize: 20
      },
      test3: {
        textAlign: 'center',
        fontFamily: 'OpenSans-Bold',
        fontSize: 20
    },
    buttonTests: {
        alignItems: 'center',
        height: 43, 
        width: '100%',
        marginTop: 10,
        backgroundColor: 'white',
        padding: 10,
        borderWidth: 2,
        borderRadius: 5
    }
});
