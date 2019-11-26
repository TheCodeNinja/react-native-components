/*
FlatList Component with Images
This Modal Component updates the selected food object to FlatList
*/
import React, { Component } from 'react';
import { Text, TextInput, Platform, Dimensions } from 'react-native';
import Modal from 'react-native-modalbox'; // yarn install react-native-modalbox --save
import Button from 'react-native-button';
import flatListData from '../data/flatListData';

var screen = Dimensions.get('window');

export default class EditModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foodName: '',
            description: ''
        };
    }

    // methods
    showEditModal = (foodObj, flatlistItem) => {
        // console.log(`foodObj = ${JSON.stringify(foodObj)}`);
        this.setState({
            key: foodObj.key,
            foodName: foodObj.name,
            description: foodObj.description,
            flatlistItem: flatlistItem
        });
        this.refs.myModal.open();
    }

    generateKey = (numberOfCharacters) => { // generate a random string
        return require('random-string')({length: numberOfCharacters});
    }

    render() {
        return (
            <Modal ref={"myModal"}
                style={{ justifyContent: 'center', borderRadius: Platform.OS === 'ios' ? 30 : 0, shadowRadius: 10, width: screen.width - 80, height: 280 }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    // alert("Modal closed");
                }}>

                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginTop: 40 }}>
                    Food's information
                </Text>

                <TextInput
                    style={{ height: 40, borderBottomColor: 'gray', marginLeft: 30, marginRight: 30, marginTop: 20, marginBottom: 10, borderBottomWidth: 1 }}
                    onChangeText={text => this.setState({ foodName: text })} // function will call when user types
                    placeholder="Enter food's name"
                    value={this.state.foodName}
                />
                <TextInput
                    style={{ height: 40, borderBottomColor: 'gray', marginLeft: 30, marginRight: 30, marginTop: 10, marginBottom: 20, borderBottomWidth: 1 }}
                    onChangeText={text => this.setState({ description: text })}
                    placeholder="Enter food's description"
                    value={this.state.description}
                />
                <Button
                    style={{ fontSize: 18, color: 'white' }}
                    containerStyle={{ padding: 8, marginLeft: 70, marginRight: 70, height: 40, borderRadius: 6, backgroundColor: 'mediumseagreen' }}
                    onPress={() => {
                        // verifications
                        if (this.state.foodName.length == 0 || this.state.description.length == 0) {
                            alert("You must enter food's name and description");
                            return;
                        }
                        // check if the item exists in the flatlist
                        var foundIndex = flatListData.findIndex(item => this.state.key == item.key);
                        // not found
                        if (foundIndex < 0) {
                            return;
                        }
                        // update the food object
                        flatListData[foundIndex].name = this.state.foodName;
                        flatListData[foundIndex].description = this.state.description;
                        // refresh, state changes, component re-renders
                        this.state.flatlistItem.refreshFlatListItem();
                        // close the modal
                        this.refs.myModal.close();
                    }}>
                    Save
                </Button>
            </Modal>
        );
    }
}
