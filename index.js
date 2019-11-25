/**
 * @format
 */
import React, { Component } from 'react';
import { 
    Alert, AppRegistry, View, Image, Text, 
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback 
} from 'react-native';
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
                <TouchableHighlight
                    onPress={this._onPressButton} // Called when the touch is released
                    underlayColor='red'
                    onShowUnderlay={() => { // Called immediately after the underlay is shown
                        alert("onShowUnderlay button !");
                    }}
                >
                    <View style={{ backgroundColor: 'green' }}>
                        {/* <Image
                            style={{width: 100, height: 40}}
                            source={require('./images/touchableHightlightButton.png')}
                            >
                        </Image> */}
                        <Text style={{ color: 'white', padding: 20, fontSize: 18 }}>
                            TouchableHighlight
                        </Text>
                    </View>
                </TouchableHighlight>

                <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    useForeground={false}
                >
                    <View style={{ width: 300, height: 50, margin: 20, backgroundColor: 'blue' }}>
                        <Text style={{ margin: 10, fontSize: 20, color: 'white', textAlign: 'center' }}>
                            TouchableNativeFeedback
                        </Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableOpacity
                    onPress={this._onPressButton}
                    activeOpacity={0.7}
                >
                    <View style={{ width: 200, height: 50, backgroundColor: 'red' }}>
                        <Text style={{ margin: 10, fontSize: 20, color: 'white', textAlign: 'center' }}>
                            TouchableOpacity
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableWithoutFeedback
                    // onPress={this._onPressButton}
                    onLongPress={() => {
                        alert("onLongPress");
                    }}
                    // onPressIn={() => {
                    //     alert("onPressIn");
                    // }}
                    // onPressOut={() => {
                    //     alert("onPressOut");
                    // }}
                    disabled={false}
                >
                    <View style={{ width: 300, height: 50, margin: 20, backgroundColor: 'purple' }}>
                        <Text style={{ margin: 10, fontSize: 20, color: 'white', textAlign: 'center' }}>
                            TouchableWithoutFeedback
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

AppRegistry.registerComponent(appName, () => App);