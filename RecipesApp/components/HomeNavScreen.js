import { createStackNavigator } from '@react-navigation/stack'
import Home from './Home'

const HomeNav = createStackNavigator()

const HomeNavScreen = ({recipes, returnMostRecentRecipe, returnMostPopularRecipe}) => (

    <HomeNav.Navigator>
        <HomeNav.Screen name="Home">
            { props => <Home
             {...props}
             recipes={recipes}
             returnMostPopularRecipe={returnMostPopularRecipe} 
             returnMostRecentRecipe={returnMostRecentRecipe}
            />}    
        </HomeNav.Screen>
    </HomeNav.Navigator>

)

export default HomeNavScreen