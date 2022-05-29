import React from 'react';
import { View, StyleSheet } from 'react-native';
import Grid from './Grid';  

const Calculator = (add, subtract, multiply, divide, clear, displayValue) => {

    return (
        <View>
            <Grid add={add} subtract={subtract} multiply={multiply} divide={divide} clear={clear} displayValue={displayValue}/>
        </View>
    );
    
}


export default Calculator;