import React, { Component } from 'React';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Alert,
    Flatlist
} from 'react-native';

import MessageInbox from './MessageInbox';

export default class Inbox extends Component {

    state = {
        messageList: [
            '201700120972',
            '201700120974',
            '201700120975',
            '201700121265',
            '201700198423',
            '201709830382',
            '201700039332',
            '201708309830',
            '201700238472',
            '201700238303',
            '201700393473',
            '201701098323',
            '201703093999',
        ],
        messageText: '',
    }

    _onPressButton() {
        Alert.alert('documento assinado!!!!')
    }

    render() {

        let inbox_messages = this.state.messageList.map((document, message) => {
            return <MessageInbox document={document} message='documento pendente de assinatura'  >  </MessageInbox>
        });

        return (
            <ScrollView>
                {inbox_messages}
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