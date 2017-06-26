import React, { Component } from 'React';
import { View, Text, StyleSheet } from 'react-native';


export default class Header extends Component {

    render() {
        return (
            <View style={styles.content}>
                <Text style={styles.systemText}>EDOC</Text>
                <Text style={styles.descriptionText}>Sistema de Gestão Documental</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        //flex: 1,
        flexDirection: 'column',
        backgroundColor: '#16295D',
        justifyContent: 'space-between',
        marginTop: 20,
        //marginLeft: 10
    },
    systemText: {
        fontSize: 50,
        color: 'rgb(256,256,256)',
        fontWeight: 'bold'
    },
    descriptionText: {
        fontSize: 20,
        color: '#DDC241',
        fontStyle: 'italic',
    }
})

