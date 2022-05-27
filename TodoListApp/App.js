import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Heading from './Heading'
import Input from './Input'
import Button from './Button'
import TodoList from './TodoList'
import TabBar from './TabBar'

let todoIndex = 0

class App extends Component {

  constructor() {

    super()

    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }
    this.toggleCompleted = this.toggleCompleted.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.submitTodo = this.submitTodo.bind(this)
    this.toggleFavorite = this.toggleFavorite.bind(this)
    this.setType = this.setType.bind(this)

  }

  inputChange(inputValue) {
    this.setState({ inputValue })
  }

  deleteTodo(todoIndex) {

    let { todos } = this.state
    todos = todos.filter(todo => todo.todoIndex !== todoIndex)
    this.setState({ todos })

  }

  toggleCompleted(todoIndex) {

    let { todos } = this.state
    todos.forEach(todo => {
      if (todo.todoIndex === todoIndex) {
        todo.completed = !todo.completed
      }
    })

    this.setState({ todos })

  }

  toggleFavorite(todoIndex) {

    let { todos } = this.state
    todos.forEach(todo => {
      if (todo.todoIndex === todoIndex) {
        todo.favorite = !todo.favorite
      }
    })

    this.setState({ todos })

  }

  setType(type) {
    this.setState({ type })
  }

  submitTodo() {

    if (this.state.inputValue.match(/^\s*$/)) {
      return
    }

    const todo = {
      title: this.state.inputValue,
      todoIndex,
      completed: false,
      favorite: false
    }

    todoIndex++

    const todos = [...this.state.todos, todo]

    this.setState({ todos, inputValue: '' })

    // console.log(`Submit todo : ${this.state.inputValue} `)

  }

  render() {
    const { inputValue, todos, type } = this.state
    return (
      <View style={styles.container}>
        <ScrollView keyboardshouldPersistTaps='always'
          style={styles.content}>
          <Heading />
          <Input 
            inputValue={inputValue}
            inputChange={(text) => this.inputChange(text)} />
          <TodoList 
            toggleCompleted={this.toggleCompleted}
            deleteTodo={this.deleteTodo}
            todos={todos} 
            type = {type}
            toggleFavorite={this.toggleFavorite}/>
          <Button submitTodo={this.submitTodo} />
        </ScrollView>
        <TabBar type={type} setType={this.setType}/>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
})
export default App
