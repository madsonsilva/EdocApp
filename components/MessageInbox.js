import React, { Component } from 'React'
import { StyleSheet, Text, View, Image } from 'react-native'

export default class MessageInbox extends Component {


    render() {

        let documentIconImage = require('../images/document-icon.png');

        return (
            <View
                id={this.props.id}
                style={styles.container}>

                <View style={{ flexDirection: 'row', backgroundColor: '#EDECEC' }}>
                    <Image source={documentIconImage} style={styles.documentIcon} />
                    <Text style={styles.document}>
                        {this.props.document}
                    </Text>
                </View>

                <Text style={styles.message}>
                    {this.props.message}
                </Text>
            </View>

        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 50,
    },
    document: {
        position: 'relative',
        paddingLeft: 5,
        paddingTop: 0,
        fontSize: 25,
        fontWeight: 'bold',
    },
    message: {
        fontSize: 15,
        paddingLeft: 35,
        backgroundColor: '#EDECEC',
    },
    documentIcon: {
        width: 30,
        height: 30,
        
    }
});

