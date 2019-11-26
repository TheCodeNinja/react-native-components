/*
FlatList Component with Images
This Modal Component adds a food object to FlatList
*/
import React, { Component } from 'react';
import {
    Text, TextInput, Platform, Dimensions
} from 'react-native';
import Modal from 'react-native-modalbox'; // yarn add react-native-modalbox --save
import Button from 'react-native-button';
import flatListData from '../data/flatListData'; // yarn add random-string --save

var screen = Dimensions.get('window');

export default class AddModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newFoodName: '',
            newDescription: ''
        };
    }

    // methods
    showAddModal = () => {
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
                backdrop={true} // display a backdrop behind the modal
                onClosed={() => {
                    // alert("Modal closed");
                }}>

                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginTop: 40 }}>
                    New food's information
                </Text>

                <TextInput
                    style={{ height: 40, borderBottomColor: 'gray', marginLeft: 30, marginRight: 30, marginTop: 20, marginBottom: 10, borderBottomWidth: 1 }}
                    onChangeText={text => this.setState({ newFoodName: text })} // function will call when user types
                    placeholder="Enter new food's name"
                    value={this.state.newFoodName}
                />
                <TextInput
                    style={{ height: 40, borderBottomColor: 'gray', marginLeft: 30, marginRight: 30, marginTop: 10, marginBottom: 20, borderBottomWidth: 1 }}
                    onChangeText={text => this.setState({ newDescription: text })}
                    placeholder="Enter new food's description"
                    value={this.state.newDescription}
                />
                <Button
                    style={{ fontSize: 18, color: 'white' }}
                    containerStyle={{ padding: 8, marginLeft: 70, marginRight: 70, height: 40, borderRadius: 6, backgroundColor: 'mediumseagreen' }}
                    onPress={() => {
                        // verifications
                        if (this.state.newFoodName.length == 0 || this.state.newDescription.length == 0) {
                            alert("You must enter food's name and description");
                            return;
                        }
                        // assign new key
                        const newKey = this.generateKey(24);
                        // create the object
                        const newFood = {
                            key: newKey,
                            name: this.state.newFoodName,
                            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/64/Foods_%28cropped%29.jpg",
                            description: this.state.newDescription
                        };
                        // push the object to the array
                        flatListData.push(newFood);
                        // refresh, state changes, component re-renders
                        this.props.parentFlatList.refreshFlatList(newKey);
                        // close the modal
                        this.refs.myModal.close();
                    }}>
                    Save
                </Button>
            </Modal>
        );
    }
}
