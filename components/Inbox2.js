import React, { Component } from 'React';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';

import {
    TabViewAnimated,
    TabBar,
    SceneMap,
} from 'react-native-tab-view';

import MessageInbox from './MessageInbox';


//const FirstRoute = () => <View style={[styles.container, { backgroundColor: '#ff4081' }]} />
//const SecondRoute = () => <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
const FirstRoute = () =>
    <MessageInbox
        id={1}
        document='20170002541'
        message='documento pendente de sua assinatura'>
    </MessageInbox>

const SecondRoute = () =>
    <MessageInbox
        id={2}
        document='2017003215'
        message='documento pendente de assinatura'  >
    </MessageInbox>

export default class Inbox2 extends Component {

    state = {
        index: 0,
        routes: [
            { key: '1', title: 'Minhas Tarefas' },
            { key: '2', title: 'Tarefas da UO' }
        ],
    };

    _eventChangeTab = index => this.setState({ index });

    _renderHeader = props => <TabBar {...props} />;

    _renderScene = SceneMap({
        '1': FirstRoute,
        '2': SecondRoute,
    });

    render() {

        return (
            <TabViewAnimated
                style={styles.container}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onRequestChangeTab={this._eventChangeTab}
            />

        );
    }
}

const styles = StyleSheet.create({


    container: {
        flex: 1,
    },
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