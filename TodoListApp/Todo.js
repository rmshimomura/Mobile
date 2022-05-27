import React from 'react'

import { View, Text, StyleSheet } from 'react-native'
import TodoButton from './TodoButton'

const Todo = ({ todo, toggleCompleted, deleteTodo, toggleFavorite }) => (

    <View style={styles.todoContainer}>
        
        <Text style={styles.todoText}>
            {todo.title}
        </Text>
    
        <View style={styles.buttons}>

            <TodoButton
                name="Done"
                completed={todo.completed}
                onPress={() => toggleCompleted(todo.todoIndex)} />
            <TodoButton
                name="Delete"
                onPress={() => deleteTodo(todo.todoIndex)} />
            <TodoButton
                name="Favorite"
                onPress={() => toggleFavorite(todo.todoIndex)} />
        </View>
    </View>
)

const styles = StyleSheet.create({

    todoContainer: {
        marginLeft: 20,
        marginRight: 20,
        backgroundcolor: '#ffffff',
        borderTopWidth: 1,
        borderRightwidth: 1,
        borderLeftwidth: 1,
        bordercolor: '#ededed',
        paddingLeft: 14,
        paddingTop: 7,
        paddingBottom: 7,
        shadowopacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowoffset: { width: 2, height: 2 },
        flexDirection: 'row',
        alignItems: 'center'
    },
    todoText: {
        fontSize: 17
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }

})

export default Todo