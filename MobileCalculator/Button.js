import React from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";

const Button = (props) => {

    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    if (props.operation) {

        return (

            <TouchableHighlight onPress={() => props.executeFunction(props.label)}>

                <View style={[style.button, style.operation]}>

                    <Text style={style.text}>
                        {props.label}
                    </Text>

                </View>
            </TouchableHighlight>

        )

    } else if (props.double) {

        return (

            <TouchableHighlight onPress={() => props.executeFunction(props.label)}>
                <View style={[style.button, style.double]}>

                    <Text style={style.text}>
                        {props.label}
                    </Text>


                </View>
            </TouchableHighlight>

        )

    } else if (props.triple) {

        return (

            <TouchableHighlight onPress={() => props.executeFunction()}>
                <View style={[style.button, style.triple]}>

                    <Text style={style.text}>
                        {props.label}
                    </Text>

                </View>
            </TouchableHighlight>

        )

    } else {

        return (

            <TouchableHighlight onPress={() => props.executeFunction(props.label)} activeOpacity={0.8}>
                <View style={[style.button]}>


                    <Text style={style.text}>
                        {props.label}
                    </Text>


                </View>
            </TouchableHighlight>

        )

    }
}

const style = StyleSheet.create({

    button: {

        width: 100,
        height: 100,
        fontSize: 30,
        backgroundColor: '#f0f0f0',
        outline: 'none',
        textAlign: 'center',
        justifyContent: 'space-evenly',

        borderColor: '#888',
        borderWidth: 1,
        borderStyle: 'solid',

    },

    double: {

        width: 200,

    },

    triple: {

        width: 300,

    },

    operation: {
        backgroundColor: '#fa8231',
        color: '#FFF',
    },

    text: {
        fontSize: 30,
        textAlign: 'center',
        justifyContent: 'space-evenly',
    }

})

export default Button