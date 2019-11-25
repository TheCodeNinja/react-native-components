/**
 * @format
 */
import React, { Component } from 'react';
import { Alert, AppRegistry, View } from 'react-native';
import Button from 'react-native-button';
// import App from './App';
import {name as appName} from './app.json';

export default class App extends Component {

    // Button click event handler
    _onPressButton = () => {
        Alert.alert("You pressed the button !");
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button 
                    style={{ fontSize: 25, color: 'white', backgroundColor: 'green', padding: 15, borderRadius: 20 }}   
                    onPress={this._onPressButton}>
                    This is a button
                </Button>
            </View>
        );
    }
}

AppRegistry.registerComponent(appName, () => App);