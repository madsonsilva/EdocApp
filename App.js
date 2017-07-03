import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';


import Header from './components/Header';
import Footer from './components/Footer';
import Inbox2 from './components/Inbox2';
import MessageInbox from './components/MessageInbox';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        {/*HEADER*/}
        <Header></Header>

        {/*BODY*/}
        <View style={styles.body}>
          {/*<MessageInbox document='200700253215' message='documento pendente de assinatura'></MessageInbox> */}
          <Inbox2></Inbox2>
        </View>

        {/*FOOTER*/}
        <Footer></Footer>

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
    backgroundColor: 'white',
    width: 'auto',
    //height: 50
  },
});

