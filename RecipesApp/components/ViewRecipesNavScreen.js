import { createStackNavigator } from '@react-navigation/stack'
import ViewRecipes from './ViewRecipes'
import Recipe from './Recipe'
import ViewComments from './ViewComments'

const ViewRecipesNav = createStackNavigator()

const ViewRecipesNavScreen = ({ recipes, upvoteRecipe, downvoteRecipe, sortRecipes, order, deleteRecipe }) => (

    <ViewRecipesNav.Navigator>
        <ViewRecipesNav.Screen name="All recipes">
            {props => <ViewRecipes {...props} recipes={recipes} upvoteRecipe={upvoteRecipe} downvoteRecipe={downvoteRecipe} sortRecipes={sortRecipes} order={order} deleteRecipe={deleteRecipe}/>}
        </ViewRecipesNav.Screen>
        <ViewRecipesNav.Screen name="View comments" options={{title: "Comments" }}>
            {props => <ViewComments {...props} recipes={recipes}/>}
        </ViewRecipesNav.Screen>
        <ViewRecipesNav.Screen name="Recipe" options={{title: "Recipe information" }}>
            {props => <Recipe {...props} recipes={recipes}/>}
        </ViewRecipesNav.Screen>

    </ViewRecipesNav.Navigator>

)

export default ViewRecipesNavScreen