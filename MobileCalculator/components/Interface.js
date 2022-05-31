import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './Button';
import Display from './Display';

const Interface = ({clear, addDigit, setOperation, displayValue}) => {

    return (

        <View style={style.container}>

            <Display value={displayValue} />
            <Button label="AC" executeFunction={clear} triple />
            <Button label="/" executeFunction={setOperation} operation />
            <Button label="7" executeFunction={addDigit} />
            <Button label="8" executeFunction={addDigit} />
            <Button label="9" executeFunction={addDigit} />
            <Button label="*" executeFunction={setOperation} operation />
            <Button label="4" executeFunction={addDigit} />
            <Button label="5" executeFunction={addDigit} />
            <Button label="6" executeFunction={addDigit} />
            <Button label="-" executeFunction={setOperation} operation />
            <Button label="1" executeFunction={addDigit} />
            <Button label="2" executeFunction={addDigit} />
            <Button label="3" executeFunction={addDigit} />
            <Button label="+" executeFunction={setOperation} operation />
            <Button label="0" executeFunction={addDigit} double />
            <Button label="." executeFunction={addDigit} />
            <Button label="=" executeFunction={setOperation} operation />

        </View>

    );

}

const style = StyleSheet.create({

    container: {
        
        width: 400,
        borderRadius: 50,
        overflow: 'hidden',
        position: 'relative',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }

})

export default Interface