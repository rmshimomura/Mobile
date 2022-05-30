import React from 'react';
import { View } from 'react-native';
import Interface from './Interface';  

const Calculator = (props) => {

    return (
        <View>
            <Interface 
                addDigit={props.addDigit} 
                clear={props.clear} 
                displayValue={props.displayValue}
                setOperation={props.setOperation}
            />
        </View>
    );
    
}


export default Calculator;