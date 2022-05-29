import React from "react";
import { View, StyleSheet } from "react-native";

const Button = props => {

    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''
    

    return (

        <View  

            onClick={event => props.click && props.click(props.label)}
            >
            {props.label}

        </View>

    )
}

const style = StyleSheet.create({

        button : {

            fontSize: '1.4em',
            backgroundColor: '#f0f0f0',
            border: 'none',
            borderRight: 'solid 1px #888',
            borderBottom: 'solid 1px #888',
            outline: 'none',
        },
        
        active : {
            backgrounColor: '#ccc',
        },
        
        double : {
            gridColumn: 'span 2',
        },
        
        triple : {
            gridColumn: 'span 3',
        },
        
        operation : {
            backgroundColor: '#fa8231',
            color: '#FFF',
        },
        
        operation : {
            backgroundColor: '#fa8231cc',
        },
})

export default Button