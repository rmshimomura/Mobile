import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './Button';

const Grid = (add, subtract, multiply, divide, clear, displayValue) => {

    return (
        <View style={style.container}>
                {/* <Display value={displayValue} /> */}
                displayValue
                <Button label="AC" />
                <Button label="7" />
                <Button label="8" />
                <Button label="9" />
                <Button label="/" operation="true" />
                <Button label="4" />
                <Button label="5" />
                <Button label="6" />
                <Button label="*" operation="true" />
                <Button label="1" />
                <Button label="2" />
                <Button label="3" />
                <Button label="-" operation="true" />
                <Button label="0" double />
                <Button label="." />
                <Button label="=" operation="true" />
                <Button label="+" operation="true" />


        </View>
    );

}

// const style = StyleSheet.create({
//     container: {

//         height: '320px',
//         width: '235px',
//         borderRadius: '5px',
//         overflow: 'hidden',

//         display: 'grid',
//         gridTemplateColumns: '25% 25% 25% 25%',
//         gridTemplateRows : '1fr 48px 48px 48px 48px 48px'
//     }
// });

const style = StyleSheet.create({
    container: {
        display: 'flex',

        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start' // if you want to fill rows left to right
    },
    double: {
        width: '100%', // is 50% of container width
        alignItems: 'flex-end'
    },
    triple: {
        width: '66.66%' // is 33.33% of container width
    },
    normal: {
        width: '25%'
    }
})

export default Grid