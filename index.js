/**
 * @format
 */
import React, { Component } from 'react';
import { AppRegistry, TextInput, View, Text } from 'react-native';
// import App from './App';
import {name as appName} from './app.json';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'please type your text',
            password: ''
        }
    }

    render() {
        return (
            <View>
                <TextInput
                    style={{ height: 40, margin: 20, padding: 10, borderColor: 'gray', borderWidth: 1 }}
                    keyboardType='email-address'
                    placeholder='Enter your email'
                    placeholderTextColor='red'
                    onChangeText={text => {
                        this.setState(preState => {email: text})
                    }}
                />
                <Text style={{marginLeft: 20}}>{this.state.email}</Text>

                <TextInput
                    style={{ height: 40, margin: 20, padding: 10, borderColor: 'gray', borderWidth: 1 }}
                    keyboardType='default'
                    placeholder='Enter your password'
                    placeholderTextColor='red'
                    onChangeText={text => {
                        this.setState(preState => {password: text})
                    }}
                />
            </View>
        )
    }
}

AppRegistry.registerComponent(appName, () => App);