import 'react-native-gesture-handler';
import React, { Component, useState } from 'react'
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeNavScreen from './components/HomeNavScreen'
import ViewRecipesNavScreen from './components/ViewRecipesNavScreen'
import AddRecipe from './components/AddRecipe';

const Tab = createMaterialBottomTabNavigator();

export default class App extends Component {

  state = {
    recipes: [],
    order: 'oldest'
  }

  addRecipe = (recipe) => {
    const recipes = this.state.recipes
    recipes.push(recipe)
    recipes['newRecipes'] = true
    this.setState({ recipes })
  }

  addIngredients = (recipe, ingredient) => {

    const index = this.state.recipes.findIndex(runner => runner.id === recipe.id)

    if (index === -1) {

      Alert.alert(
        'Error',
        'Recipe not found, please try again',
        [
          {
            text: 'Go back',
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
        'Recipe not found, please try again',
        [
          {
            text: 'Go back',
            style: 'destructive',
          },

        ]
      )

      return

    }

    const specificRecipe = this.state.recipes[index]
    specificRecipe.upvotes++
    const recipes = this.state.recipes
    recipes.splice(index, 1)
    recipes.splice(index, 0, specificRecipe)
    this.setState({ recipes })

  }

  downvoteRecipe = (recipe) => {

    const index = this.state.recipes.findIndex(runner => runner.id === recipe.id)

    if (index === -1) {

      Alert.alert(
        'Error',
        'Recipe not found, please try again',
        [
          {
            text: 'Go back',
            style: 'destructive',
          },

        ]
      )

      return

    }

    const specificRecipe = this.state.recipes[index]
    if(specificRecipe.upvotes > 0) {
      specificRecipe.upvotes--

      const recipes = this.state.recipes
      recipes.splice(index, 1)
      recipes.splice(index, 0, specificRecipe)
      this.setState({ recipes })

    }

  }

  sortRecipes = (order) => {
    const recipes = this.state.recipes
    if(order === 'recent') {
      const sortedRecipes = recipes.sort((a, b) => b.id - a.id)
      this.setState({ recipes: sortedRecipes, order: 'oldest' })
    } else if(order === 'oldest') {
      const sortedRecipes = recipes.sort((a, b) => a.id - b.id)
      this.setState({ recipes: sortedRecipes, order: 'recent' })
    }
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

  returnTopRatedRecipe = () => {

    const recipes = this.state.recipes
    const topRatedRecipe = recipes.sort((a, b) => b.rating - a.rating)[0]
    return topRatedRecipe
  }

  returnNumberOfNewRecipes = () => {

    let recipes = this.state.recipes
    const newRecipes = recipes.filter(recipe => recipe.new_recipe === true)
    return newRecipes.length

  }

  render() {

    return (
      <NavigationContainer>
       <Tab.Navigator
       shifting='true'
       barStyle = {{ borderColor: '#f5f5f5' }}
       >
         <Tab.Screen name="Home Screen"
            options={{tabBarColor: 'orange', tabBarIcon: 'home', tabBarLabel: 'Home'}}
         >
            {props => <HomeNavScreen {...props}
              recipes={this.state.recipes} 
              returnMostPopularRecipe={this.returnMostPopularRecipe}
              returnMostRecentRecipe={this.returnMostRecentRecipe}
              returnTopRatedRecipe={this.returnTopRatedRecipe}/>
            }
         </Tab.Screen>
         
         <Tab.Screen name="View recipes"
            options={{tabBarBadge: this.state.recipes.newRecipes ? this.returnNumberOfNewRecipes() : null, tabBarColor: 'darkblue' ,tabBarIcon: 'view-list'}}>
            {props => <ViewRecipesNavScreen {...props}
              recipes={this.state.recipes}
              upvoteRecipe={this.upvoteRecipe}
              downvoteRecipe={this.downvoteRecipe}
              sortRecipes={this.sortRecipes}
              order={this.state.order}
            />}
         </Tab.Screen>

         <Tab.Screen name="Add recipe"
         options={{tabBarColor: 'green', tabBarIcon: 'plus'}}>
            {props => <AddRecipe {...props}
              recipes={this.state.recipes}
              addRecipe={this.addRecipe}
              addIngredients={this.addIngredients}
            />}

         </Tab.Screen>

       </Tab.Navigator>
     </NavigationContainer> 
    )
  }
}