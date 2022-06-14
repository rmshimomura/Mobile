import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Dimensions
} from 'react-native'

import CenterMessage from './CenterMessage'

export default class ViewRecipes extends React.Component {

    navigate = (item) => {
        this.props.navigation.navigate('Recipe', { recipe: item })
    }

    render() {
        
        const { recipes } = this.props
        return (
            <ScrollView contentContainerStyle={[!recipes.length && { flex: 1 }]}>
                <View style={[!recipes.length && { justifyContent: 'center', flex: 1 }]}>
                    {
                        !recipes.length && <CenterMessage message='No saved recipes!' />
                    }
                    {
                        recipes.map((item, index) => (

                            <TouchableOpacity onPress={() => this.navigate(item)} key={index} >
                                
                                <View style={styles.recipesContainer}>
                                    <Text style={styles.recipe}>Recipe name: {item.name}</Text>
                                    <Text style={styles.recipe}>Ingredients: {item.ingredients.join(`\n-`)}</Text>
                                    <Text style={styles.recipe}>Upvotes: {item.upvotes}</Text>
                                </View>

                            </TouchableOpacity>
                        ))
                    }
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    recipesContainer: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#1976D2'
    },
    recipe: {
        fontSize: 20,
    },
})