import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import Button from './Button';
import Display from './Display';

const Interface = (props) => {

    console.log(props)

    return (

        <View style={style.container}>

            <Display value={props.displayValue} />


            <Button label="AC" executeFunction={props.clear} triple />
            <Button label="/" executeFunction={props.divide} operation />
            <Button label="7" executeFunction={props.add} />
            <Button label="8" executeFunction={props.add} />
            <Button label="9" executeFunction={props.add} />
            <Button label="*" executeFunction={props.multiply} operation />
            <Button label="4" executeFunction={props.add} />
            <Button label="5" executeFunction={props.add} />
            <Button label="6" executeFunction={props.add} />
            <Button label="-" executeFunction={props.subtract} operation />
            <Button label="1" executeFunction={props.add} />
            <Button label="2" executeFunction={props.add} />
            <Button label="3" executeFunction={props.add} />
            <Button label="+" executeFunction={props.add} operation />
            <Button label="0" executeFunction={props.add} double />
            <Button label="." executeFunction={props.add} />
            <Button label="=" executeFunction={props.add} operation />

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