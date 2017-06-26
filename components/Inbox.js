import React, { Component } from 'React';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';

import MessageInbox from './MessageInbox';

export default class Inbox extends Component {

    state = {
        messageList: [],
        messageText: '',
    }

    _onPressButton() {
        Alert.alert('documento assinado!!!!')
    }

    render() {

        let inbox_messages = this.state.messageList.map((document, text) => {
            return <MessageInbox document={document} text={message}  >  </MessageInbox>
        });

        return (
            <ScrollView>


            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    flatlist: {
        //paddingTop: 60,
        alignItems: 'center',
        backgroundColor: 'silver'
    },
    button: {
        marginBottom: 20,
        //width: 260,
        alignItems: 'flex-start',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 15,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    }
})


/*const styles = StyleSheet.create({

    item: {
        padding: 10,
        fontSize: 13,
        height: 44,
        backgroundColor: 'silver',
        fontWeight: 'bold'
    },
})*/