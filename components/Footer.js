import React, { Component } from 'React';
import { View, Text, StyleSheet } from 'react-native';


export default class Footer extends Component {

    render() {
        return (
            <View style={styles.footer}>
                <Text style={{ alignContent: 'center' }}>FOOTER</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        backgroundColor: 'blue',
        width: 'auto',
        height: 30
    }
})

