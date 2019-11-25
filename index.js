/**
 * @format
 */
import React, { Component } from 'react';
import { AppRegistry, TextInput, View, Text, Keyboard } from 'react-native';
// import App from './App';
import {name as appName} from './app.json';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'please type your text',
            password: '',
            description: '',
            keyboardNotice: ''
        }
    }

    // This function will be called when the component is mount
    componentWillMount() {
        // add the event listeners
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            this.setState(() => {
                return {keyboardNotice: 'Keyboard is shown'};
            })
        });
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
          this.setState(() => {
              return {keyboardNotice: 'Keyboard Hide'};
          });
        });
    }
  
    // This function will be called when the component is unmount
    componentWillUnmount() {
        // remove the event listeners
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    render() {
        return (
            <View>
                <TextInput
                    style={{ height: 40, margin: 20, padding: 10, borderColor: 'gray', borderWidth: 1 }}
                    keyboardType='email-address'
                    placeholder='Enter your email'
                    placeholderTextColor='red'
                    autoFocus={true}
                    onChangeText={text => {
                        this.setState(preState => {
                            return {email: text}
                        })
                    }}
                />
                <Text style={{marginLeft: 20}}>{this.state.email}</Text>

                <TextInput
                    style={{ height: 40, margin: 20, padding: 10, borderColor: 'gray', borderWidth: 1 }}
                    keyboardType='default'
                    placeholder='Enter your password'
                    secureTextEntry={true}
                    placeholderTextColor='red'
                    onChangeText={text => {
                        this.setState(preState => {
                            return {password: text}
                        })
                    }}
                />

                <TextInput
                    style={{ height: 100, margin: 20, padding: 10, borderColor: 'gray', borderWidth: 1 }}
                    multiline={true}
                    borderBottomColor='green'
                    borderBottomWidth={3}
                    borderLeftColor='green'
                    borderRightColor='green'
                    borderLeftWidth={3}
                    borderRightWidth={3}
                    editable={true}
                    returnKeyType='done'
                    onSubmitEditing={Keyboard.dismiss}
                    onChangeText={text => {
                        this.setState(() => {
                            return {description: text}
                        })
                    }}
                />
                <Text style={{marginLeft: 20}}>{this.state.keyboardNotice}</Text>
            </View>
        )
    }
}

AppRegistry.registerComponent(appName, () => App);