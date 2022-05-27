import React from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';

const TodoButton = ({ onPress, completed, name }) => {

    return(

    <TouchableHighlight

        onPress={onPress}
        underlayColor='#efefef'
        style={styles.button}>

        <Text style={[
            styles.text,
            completed ? styles.completedButton : null,
            name === 'Delete' ? styles.deleteButton : null,
            name === 'Favorite' ? styles.favoriteButton : null]}
        >
            {name}
        </Text>

    </TouchableHighlight>

    )
}

const styles = StyleSheet.create({
    button: {
        alignSelf: 'flex-end',
        padding: 7,
        borderColor: '#ededed',
        borderWidth: 1,
        borderRadius: 4,
        marginRight: 5,
    },
    text: {
        color: '#666666',
    },
    completedButton: {
        color: 'green',
        fontWeight: 'bold',
    },
    deleteButton: {
        color: 'rgba(175, 47, 47, 1)',
    },
    favoriteButton: {
        color: 'gold',
    },
})

export default TodoButton;