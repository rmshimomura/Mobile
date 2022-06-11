import 'react-native-gesture-handler';
import React, { Component, useState } from 'react'
import { Alert, Text, TouchableHighlight, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeNavScreen from './components/HomeNavScreen'
import ViewRecipesNavScreen from './components/ViewRecipesNavScreen'
import AddRecipe from './components/AddRecipe';

const Tab = createMaterialBottomTabNavigator();

export default class App extends Component {

  state = {
    recipes: [],
  }

  addRecipe = (recipe) => {
    const recipes = this.state.recipes
    recipes.push(recipe)
    this.setState({ recipes })
  }

  addIngredients = (recipe, ingredient) => {

    const index = this.state.recipes.findIndex(runner => runner.id === recipe.id)

    if (index === -1) {

      Alert.alert(
        'Error',
        'Recepe not found, please try again',
        [
          {
            text: 'Go back',
            onPress: () => console.log('Go back pressed'),
            style: 'destructive',
          },

        ]
      )

      return

    }

    const specificRecipe = this.state.recipes[index]
    specificRecipe.ingredients.push(ingredient)
    this.setState({ recipes: this.state.recipes })

  }

  upvoteRecipe = (recipe) => {

    const index = this.state.recipes.findIndex(runner => runner.id === recipe.id)

    if (index === -1) {

      Alert.alert(
        'Error',
        'Recepe not found, please try again',
        [
          {
            text: 'Go back',
            onPress: () => console.log('Go back pressed'),
            style: 'destructive',
          },

        ]
      )

      return

    }

    const specificRecipe = this.state.recipes[index]
    specificRecipe.upvotes++
    this.setState({ recipes: this.state.recipes })

  }

  returnMostRecentRecipe = () => {
    const recipes = this.state.recipes
    const mostRecentRecipe = recipes[recipes.length - 1]
    return mostRecentRecipe
  }

  returnMostPopularRecipe = () => {
    const recipes = this.state.recipes
    const mostPopularRecipe = recipes.sort((a, b) => b.upvotes - a.upvotes)[0]
    return mostPopularRecipe
  }

  viewRecipes = () => {
    return this.state.recipes.map(recipe => {
      return (
        <View key={recipe.id}>
          <Text>{recipe.name}</Text>
          <Text>{recipe.ingredients.join(', ')}</Text>
          <Text>{recipe.upvotes}</Text>
        </View>
      )
    })
  }

  render() {

    return (
      <NavigationContainer>
       <Tab.Navigator>
         <Tab.Screen name="Home Screen">
            {props => <HomeNavScreen {...props}
              recipes={this.state.recipes} 
              returnMostPopularRecipe={this.returnMostPopularRecipe}
              returnMostRecentRecipe={this.returnMostRecentRecipe}/>}
         </Tab.Screen>
         
         <Tab.Screen name="View recipes">
            {props => <ViewRecipesNavScreen {...props}
              recipes={this.state.recipes}
            />}
         </Tab.Screen>

         <Tab.Screen name="Add recipe">
            
            {props => <AddRecipe {...props}
              recipes={this.state.recipes}
              addRecipe={this.addRecipe}
              addIngredients={this.addIngredients}
              upvoteRecipe={this.upvoteRecipe}
            />}

         </Tab.Screen>

       </Tab.Navigator>
     </NavigationContainer> 
    )
  }
}