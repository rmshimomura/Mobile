import React from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";

const Button = ({operation, double, triple, executeFunction, label}) => {

    let classes = 'button '
    classes += operation ? 'operation' : ''
    classes += double ? 'double' : ''
    classes += triple ? 'triple' : ''

    if (operation) {

        return (

            <TouchableHighlight onPress={() => executeFunction(label)}>

                <View style={[style.button, style.operation]}>

                    <Text style={style.text}>
                        {label}
                    </Text>

                </View>
            </TouchableHighlight>

        )

    } else if (double) {

        return (

            <TouchableHighlight onPress={() => executeFunction(label)}>
                <View style={[style.button, style.double]}>

                    <Text style={style.text}>
                        {label}
                    </Text>


                </View>
            </TouchableHighlight>

        )

    } else if (triple) {

        return (

            <TouchableHighlight onPress={() => executeFunction()}>
                <View style={[style.button, style.triple]}>

                    <Text style={style.text}>
                        {label}
                    </Text>

                </View>
            </TouchableHighlight>

        )

    } else {

        return (

            <TouchableHighlight onPress={() => executeFunction(label)} activeOpacity={0.8}>
                <View style={[style.button]}>


                    <Text style={style.text}>
                        {label}
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