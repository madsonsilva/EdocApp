import React, { Component } from 'React'
import { StyleSheet, Text  } from 'react-native'



export default class MessageInbox extends Component {
    
    
    render(){
        return(
            <view>
                <Text style={ styles.document }>
                    {this.props.val.document}
                </Text>

                <Text style={ styles.message }>
                    {this.props.val.message}
                </Text>
            </view>

        );

    }
}

const styles = StyleSheet.create({
    document: {
        position: 'relative',
        padding: 20,
        fontWeight: 'bold'
    }, 

    message: {
        paddingLeft: 20
    }
});

