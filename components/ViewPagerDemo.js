import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

export default class ViewPagerDemo extends Component {
    render() {
        return (
            <ViewPager
                style={{ flex: 1 }}
                initialPage={0}
                onPageScroll={event => {
                    //console.log(`offset = ${event.nativeEvent.offset}`) // 0.xxxxx (distance to right side)
                }}
                onPageScrollStateChanged={state => {
                    console.log(`Scrolling state = ${state}`);
                }}
                onPageSelected={event => {
                    console.log(`Scrolled to page: ${event.nativeEvent.position}`) // 0, 1, 2
                }}
                >

                <View style={{ backgroundColor: 'lightseagreen' }}>
                    <Text style={ styles.textStyle }>Page 1</Text>
                </View>

                <View style={{ backgroundColor: 'palevioletred' }}>
                    <Text style={ styles.textStyle }>Page 2</Text>
                </View>

                <View style={{ backgroundColor: 'salmon' }}>
                    <Text style={ styles.textStyle }>Page 3</Text>
                </View>

            </ViewPager>
        );
    }
}
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        fontSize: 20,
        padding: 15,
        color: 'white',
        textAlign: 'center'
    }
});
