import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Inboxlist from './components/Inboxlist';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.top_container}>
          <Text style={styles.title} >e-DOC </Text>
          <Text style={styles.subtitle} >Sistema de Gestão Documental </Text>
        </View>

        <View style={styles.body}>
          
          <Text style={{
            color: '#02095D',
            marginTop: 25,
             marginBottom: 25,
            marginLeft: 10,
            fontSize: 24
          }} >Caixa de Entrada</Text>
                
          <Inboxlist />

        </View>




        <View style={styles.footer}>
          {/*<Text style={styles.footer_font}>     Comando</Text> */}
          <TextInput
            style={{
              width: 360,
              backgroundColor: '#2B4A73',
              color: 'rgb(256,256,256)',
              position: 'relative'
            }}
            value={'   Digite o comando...'} keyboardType={'numeric'}

          />
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#16295D',
    justifyContent: 'space-between',
  },
  top_container: {
    height: 90,
    marginTop: 20,
    marginLeft: 10,
    //backgroundColor: 'red'
  },
  title: {
    fontSize: 50,
    //flexDirection: 'row',
    color: 'rgb(256,256,256)',
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 20,
    color: '#DDC241',
    fontStyle: 'italic',
  },
  body: {
    backgroundColor: '#DADADB',
    height: 400
  },
  footer: {
    height: 50,
    flexDirection: 'row'
  },
  footer_font: {
    color: '#FDFDFE',
    fontSize: 20
  }

});
