import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import Button from './Button';
import Display from './Display';

const Interface = (add, subtract, multiply, divide, clear, displayValue) => {

    return (

        <View style={style.container}>

            <Display value={displayValue} />


            <Button label="AC" executeFunction={clear} triple />
            <Button label="/" executeFunction={divide} operation />
            <Button label="7" executeFunction={add} />
            <Button label="8" executeFunction={add} />
            <Button label="9" executeFunction={add} />
            <Button label="*" executeFunction={multiply} operation />
            <Button label="4" executeFunction={add} />
            <Button label="5" executeFunction={add} />
            <Button label="6" executeFunction={add} />
            <Button label="-" executeFunction={subtract} operation />
            <Button label="1" executeFunction={add} />
            <Button label="2" executeFunction={add} />
            <Button label="3" executeFunction={add} />
            <Button label="+" executeFunction={add} operation />
            <Button label="0" executeFunction={add} double />
            <Button label="." executeFunction={add} />
            <Button label="=" executeFunction={add} operation />

        </View>

    );

}

const style = StyleSheet.create({

    container: {
        
        width: 400,
        borderRadius: 5,
        overflow: 'hidden',
        position: 'relative',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }

})

export default Interface