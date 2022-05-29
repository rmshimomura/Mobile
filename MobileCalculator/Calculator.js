import React from 'react';
import { View, StyleSheet } from 'react-native';
import Interface from './Interface';  
import Display from './Display';

const Calculator = (add, subtract, multiply, divide, clear, displayValue) => {

    return (
        <View>
            <Interface 
                add={add} 
                subtract={subtract}
                multiply={multiply} 
                divide={divide} 
                clear={clear} 
                displayValue={displayValue}
            />
        </View>
    );
    
}


export default Calculator;