import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Header from './components/Header';
import Inbox from './components/Inbox';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        {/*HEADER*/}
        <Header></Header>
        
        {/*BODY*/}
        <View style={styles.body}>
          <Inbox></Inbox>


        </View>


        {/*FOOTER*/}
        <View style={styles.footer}></View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  body: {
    flex: 6,
    backgroundColor: 'silver',
    width: 'auto',
    //height: 50
  },

  

});

