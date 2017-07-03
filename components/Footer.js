import React, { Component } from 'React';
import { View, Text, StyleSheet, Image } from 'react-native';


export default class Footer extends Component {

    render() {

        let imageIcon = require('../images/lupa-icon.png');

        return (
            <View style={styles.footer}>
                <View style={{ paddingTop: 10 }}>
                    <Image
                        source={imageIcon}
                        style={styles.imageIcon}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        backgroundColor: '#16295D',
        width: 'auto',
        height: 30,
        alignItems: 'center',
    },
    imageIcon: {
        width: 60,
        height: 60,
    }

})

