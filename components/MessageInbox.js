import React, { Component } from 'React'
import { StyleSheet, Text, View  } from 'react-native'

export default class MessageInbox extends Component {
    
    
    render(){
        return(
            <View>
                <Text style={ styles.document }>
                    {this.props.document}
                </Text>

                <Text style={ styles.message }>
                    {this.props.message}
                </Text>
            </View>

        );

    }
}

const styles = StyleSheet.create({
    document: {
        position: 'relative',
        paddingLeft: 20,
        paddingTop: 10,
        fontSize: 25,
        fontWeight: 'bold',
    }, 

    message: {
        fontSize: 15,
        paddingLeft: 20,
    }
});

