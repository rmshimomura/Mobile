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
        alignItems: 'center',
        padding: 20,
        fontSize: 40,
        overflow: 'hidden',
        width: '100%',
        borderColor: '#888',
        borderWidth: 1,
        borderStyle: 'solid',
    }
    
})
export default Display;