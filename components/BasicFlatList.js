/*
FlatList Component
*/
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
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
            <View style={{ flex: 1, flexDirection:'column' }}>
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'mediumseagreen' }}>
                    <Image
                        source={{ uri: this.props.item.imageUrl }}
                        style={{ width: 100, height: 100, margin: 5 }}>
                    </Image>
                    <View style={{ flex: 1, flexDirection:'column', height: 100 }}>
                        <Text style={ styles.flatListItem }>{this.props.item.name}</Text>
                        <Text style={ styles.flatListItem }>{this.props.item.description}</Text>
                    </View>
                </View>
                <View style={{ height: 1, backgroundColor:'white' }}></View>
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
