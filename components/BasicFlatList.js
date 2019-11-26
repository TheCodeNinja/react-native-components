/*
FlatList Component
*/
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import flatListData from '../data/flatListData';

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
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen': 'tomato' }}>
                <Text style={ styles.flatListItem }>{this.props.item.name}</Text>
                <Text style={ styles.flatListItem }>{this.props.item.description}</Text>
            </View>
        );
    }
}

// BasicFlatList class
export default class BasicFlatList extends Component {
    render() {
        return (
            <View style={{ flex: 1, marginTop: 22 }}>
                <FlatList // props: data, renderItem, ...
                    data={flatListData} // data is a plain array
                    renderItem={({item, index}) => { // takes an item from data and renders it into the list
                        // console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                        return (
                            <FlatListItem item={item} index={index}></FlatListItem>
                        );
                    }}
                >
                </FlatList>
            </View>
        );
    }
}
