import { createStackNavigator } from '@react-navigation/stack'
import ViewRecipes from './ViewRecipes'
import Recipe from './Recipe'

const ViewRecipesNav = createStackNavigator()

const ViewRecipesNavScreen = ({recipes}) => (

    <ViewRecipesNav.Navigator>
        <ViewRecipesNav.Screen name="All recipes">
            {props => <ViewRecipes {...props} recipes={recipes}/>}    
        </ViewRecipesNav.Screen>
        <ViewRecipesNav.Screen name="Recipe" options={({ route }) => ({ title: route.params.recipe.name })}>
            {props => <Recipe {...props} recipes={recipes}/>}
        </ViewRecipesNav.Screen>
    </ViewRecipesNav.Navigator>

)

export default ViewRecipesNavScreen