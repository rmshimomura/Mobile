import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Display = (props) => {

    return (

        <View style={[style.display]}>
            <Text style={[style.displayValue]}>
                {props.value}
            </Text>
        </View>

    )

}

const style = StyleSheet.create({
    
    display: {
        
        height: 150,
        backgroundColor: '#0004',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingRight: 5,
        overflow: 'hidden',
        width: '100%',

        textAlign: 'right',
    },

    displayValue: {

        color: '#fff',
        fontSize: 60,
        fontWeight: 'bold',
        paddingRight: 30,
        fontFamily: 'monospace',
        
    }
    
})
export default Display;