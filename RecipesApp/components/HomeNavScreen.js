import { createStackNavigator } from '@react-navigation/stack'
import Home from './Home'

const HomeNav = createStackNavigator()

const HomeNavScreen = ({recipes, returnMostRecentRecipe, returnMostPopularRecipe, returnTopRatedRecipe}) => (

    <HomeNav.Navigator>
        <HomeNav.Screen name="Home">
            { props => <Home
             {...props}
             recipes={recipes}
             returnMostPopularRecipe={returnMostPopularRecipe} 
             returnMostRecentRecipe={returnMostRecentRecipe}
             returnTopRatedRecipe={returnTopRatedRecipe}
            />}    
        </HomeNav.Screen>
    </HomeNav.Navigator>

)

export default HomeNavScreen