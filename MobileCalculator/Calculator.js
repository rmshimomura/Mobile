import React from 'react';
import { View, StyleSheet } from 'react-native';
import Interface from './Interface';  
import Display from './Display';

const Calculator = (props) => {

    return (
        <View>
            <Interface 
                add={props.add} 
                subtract={props.subtract}
                multiply={props.multiply} 
                divide={props.divide} 
                clear={props.clear} 
                displayValue={props.displayValue}
            />
        </View>
    );
    
}


export default Calculator;