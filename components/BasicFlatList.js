/*
FlatList Component
Swipe to delete item in FlatList
*/
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, Alert, Platform, TouchableHighlight } from 'react-native';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout';
import AddModal from './AddModal';

// Styles
const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16,
    }
});

// FlatListItem class
class FlatListItem extends Component {

    // constructor
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null // save the key of deleting object
        };
    }

    render() {
        // an object
        // this object contains props of <Swipeout>
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => { // swiipe from left to right
                if (this.state.activeRowKey != null) {
                    this.setState({ activeRowKey: null }); // reset the state to null
                }
            },
            onOpen: (secId, rowId, direction) => { // swipe from right to left
                this.setState({ activeRowKey: this.props.item.key }); // assign the key value to the state
            },
            right: [ // the delete button
                {
                    // `delete button` press event handler
                    onPress: () => {
                        const rowKey = this.state.activeRowKey;
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete ?',
                            [
                                {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                {text: 'Yes', onPress: () => {
                                    // remove the object from the array
                                    flatListData.splice(this.props.index, 1);
                                    // Refresh FlatList !
                                    // when executes, state changes, component re-renders
                                    this.props.parentFlatList.refreshFlatList(rowKey);
                                }},
                            ],
                            { cancelable: true }
                        );
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        };

        return (
            // Swipeout contains many props
            <Swipeout {...swipeSettings}>
                <View style={{ flex: 1, flexDirection:'column' }}>
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'mediumseagreen' }}>
                        <Image
                            source={{ uri: this.props.item.imageUrl }}
                            style={{ width: 100, height: 100, margin: 5 }}>
                        </Image>
                        <View style={{ flex: 1, flexDirection: 'column', height: 100 }}>
                            <Text style={ styles.flatListItem }>{this.props.item.name}</Text>
                            <Text style={ styles.flatListItem }>{this.props.item.description}</Text>
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor:'white' }}></View>
                </View>
            </Swipeout>  
        );
    }
}

// BasicFlatList class
export default class BasicFlatList extends Component {

    // constructor
    constructor(props) {
        super(props);
        this.state = ({ // initialize state
            deletedRowKey: null,
        });
    }

    // method
    refreshFlatList = (rowKey) => {
        this.setState(preState => {
            return {
                deletedRowKey: rowKey // change state when refresh
            }; // When state changes, component re-renders automatically
        });
        this.refs.flatList.scrollToEnd();
    }

    _onPressAdd = () => {
        // alert("You add Item");
        this.refs.addModal.showAddModal();
    }

    render() {
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0}}>
                <View style={{ backgroundColor: 'tomato', flexDirection: 'row', justifyContent:'flex-end', alignItems: 'center', height: 64}}>
                    <TouchableHighlight style={{ marginRight: 10 }} underlayColor='tomato' onPress={this._onPressAdd}>
                        <Image style={{width: 35, height: 35}} source={require('../images/icons-add.png')} />
                    </TouchableHighlight>
                </View>
                <FlatList // props: ref, data, renderItem, ...
                    ref={"flatList"}
                    data={flatListData} // data is a plain array
                    renderItem={({item, index}) => { // takes an item from data and renders it into the list
                        // console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                        return (
                            // This <FlatListItem> will extends the properties and methods of this parent component
                            <FlatListItem item={item} index={index} parentFlatList={this}></FlatListItem>
                        );
                    }}
                >
                </FlatList>
                {/* <AddModal> props: ref, parentFlatList */}
                <AddModal ref={'addModal'} parentFlatList={this} ></AddModal>
            </View>
        );
    }
}
