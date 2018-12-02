import React, {Component} from 'react';
import {StyleSheet, Text, View, ListView, ScrollView, RefreshControl} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
 

export default class Results extends Component {
  constructor() {
    super();
    this.state = {
        refreshing: false,
    };
}

_onRefresh = () => {
  this.setState({refreshing: true});
  // this.fetchData().then(() => {
  // });
  setTimeout(()=> {
      this.setState({refreshing: false});

  }, 2000)
};

fetchData() {

}


  render() {
    var standardDataSource = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
    var results = [
      {
          nick: 'Marek',
          score: 18,
          total: 20,
          type: 'historia',
          date: '2018-11-22'
      },
      {
          nick: 'Krzysiek',
          score: 20,
          total: 20,
          type: 'siatkówka',
          date: '2018-12-02'
      },
      {
          nick: 'Rafał',
          score: 15,
          total: 30,
          type: 'fizyka',
          date: '2018-12-09'
    },
  ];
  var clonedResults = standardDataSource.cloneWithRows(results);


  return (
    <ScrollView style={styles.container}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}/>
                }>
                <View style={styles.toolbar}><Text style={styles.textTab}>RESULTS</Text></View>
        <Table style={styles.table} >
            <Row data={['Nick', 'Wynik', 'Suma', 'Typ', 'Data']} style={styles.head} flexArr={[1, 0.8, 0.8, 1.5,1.5]} textStyle={styles.textTab}/>
              <ListView
                  dataSource = {clonedResults}
                  renderRow = {
                  (rowData) => <Row data={[rowData.nick, rowData.score, rowData.total, rowData.type,rowData.date]}  textStyle={styles.text} flexArr={[1, 0.8, 0.8, 1.5,1.5]}/>
              }>
          </ListView>
        </Table>
    </ScrollView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1, paddingTop: 30, 
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  table: {
    width: '100%'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  toolbar: {
    flex: 1/2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 50,
  },
    Text: {
      padding: 40
    },
    head: { height: 40, backgroundColor: 'silver'},
    text: { margin: 3 , textAlign: 'center'},
    textTab: {
      fontWeight: 'bold',
      textAlign: 'center',
    }
});