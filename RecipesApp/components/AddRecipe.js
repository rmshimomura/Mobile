import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'

import * as Random from 'expo-random'

class AddRecipe extends React.Component {
  state = {
    name: '',
    ingredients: [],
    ingredientsString: '',
    upvotes: 0,
    comments: [],
  }
  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }
  submit = () => {

    const ingredients = this.state.ingredientsString.split(',').map(ingredient => ingredient.trim())
    this.setState({ ingredients })

    if (this.state.name === '' || !this.state.ingredients) alert('Please complete the recipe form!')
    const recipe = {
      name: this.state.name,
      ingredients: this.state.ingredients,
      id: this.props.recipes.length + 1,
      upvotes: 0,
      comments: []
    }
    this.props.addRecipe(recipe)
    this.setState({
      name: '',
      ingredients: [],
      upvotes: 0,
      ingredientsString: ''
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Add a new recipe to the catalog!</Text>
        <TextInput
          placeholder='Recipe name'
          onChangeText={val => this.onChangeText('name', val)}
          style={styles.input}
          value={this.state.name}
        />
        <TextInput
          placeholder='Ingredients (separate by commas)'
          onChangeText={val => this.onChangeText('ingredientsString', val)}
          style={styles.input}
          value={this.state.ingredientsString}
        />
        <TouchableOpacity onPress={this.submit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add recipe</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  },
  heading: {
    color: 'white',
    fontSize: 40,
    marginBottom: 10,
    alignSelf: 'center'
  },
  container: {
    backgroundColor: '#1976D2',
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    height: 50
  }
})
export default AddRecipe