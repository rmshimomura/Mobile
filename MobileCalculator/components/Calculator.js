import React from 'react';
import { View } from 'react-native';
import Interface from './Interface';  

const Calculator = ({addDigit, clear, displayValue, setOperation}) => {

    return (
        <View>

            <Interface 
                addDigit={addDigit} 
                clear={clear} 
                displayValue={displayValue}
                setOperation={setOperation}
            />
            
        </View>
    );
    
}


export default Calculator;