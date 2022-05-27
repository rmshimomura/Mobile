import React from 'react'
import { View } from 'react-native'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, toggleCompleted, toggleFavorite, type }) => {

    const getVisibleTodos = (todos, type) => {

        switch (type) {
            case 'All':
                return todos
            case 'Completed':
                return todos.filter(todo => todo.completed)
            case 'Active':
                return todos.filter(todo => !todo.completed)
            case 'Favorite':
                return todos.filter(todo => todo.favorite)

        }
    }

    todos = getVisibleTodos(todos, type)

    todos = todos.map((todo, i) => {

        return (
            <Todo
                deleteTodo={deleteTodo}
                toggleCompleted={toggleCompleted}
                key={i}
                todo={todo} 
                toggleFavorite={toggleFavorite}/>
        )

    })

    return (

        <View>
            {todos}
        </View>

    )

}
export default TodoList