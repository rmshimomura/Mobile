import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import Button from './Button';
import Display from './Display';

const Interface = (props) => {

    return (

        <View style={style.container}>

            <Display value={props.displayValue} />
            <Button label="AC" executeFunction={props.clear} triple />
            <Button label="/" executeFunction={props.setOperation} operation />
            <Button label="7" executeFunction={props.addDigit} />
            <Button label="8" executeFunction={props.addDigit} />
            <Button label="9" executeFunction={props.addDigit} />
            <Button label="*" executeFunction={props.setOperation} operation />
            <Button label="4" executeFunction={props.addDigit} />
            <Button label="5" executeFunction={props.addDigit} />
            <Button label="6" executeFunction={props.addDigit} />
            <Button label="-" executeFunction={props.setOperation} operation />
            <Button label="1" executeFunction={props.addDigit} />
            <Button label="2" executeFunction={props.addDigit} />
            <Button label="3" executeFunction={props.addDigit} />
            <Button label="+" executeFunction={props.setOperation} operation />
            <Button label="0" executeFunction={props.addDigit} double />
            <Button label="." executeFunction={props.addDigit} />
            <Button label="=" executeFunction={props.setOperation} operation />

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