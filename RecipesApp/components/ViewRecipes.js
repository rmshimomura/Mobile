import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native'

import CenterMessage from './CenterMessage'

export default class ViewRecipes extends React.Component {

    navigate = (item) => {
        this.props.navigation.navigate('Recipe', { recipe: item })
    }

    render() {

        let { recipes, order } = this.props
        
        if (order === 'oldest') {
            recipes = recipes.sort((a, b) => a.id - b.id)
        }
        else if (order === 'recent') {
            recipes = recipes.sort((a, b) => b.id - a.id)
        }

        return (
            
            <View style={styles.container}>

                {
                    
                    recipes.length > 0 &&
                    <TouchableOpacity onPress={() => this.props.sortRecipes(order)} style={styles.sortButton}>
                        <Text style={{ justifyContent: "flex-end", color: "white" }}>Sort recipes : {order} </Text>
                    </TouchableOpacity> 

                }

                <ScrollView contentContainerStyle={[!recipes.length && { flex: 1 }]}>
                    <View style={[!recipes.length && { justifyContent: 'center', flex: 1 }]}>
                        {
                            !recipes.length && <CenterMessage message='No saved recipes!' />
                        }
                        {
                            recipes.map((item) => (

                                <TouchableOpacity onPress={() => this.navigate(item)} key={item.id} >
                                    <View style={styles.recipesContainer}>
                                        <Text style={styles.recipe}>Recipe name: {item.name}</Text>
                                        <Text style={styles.recipe}>Upvotes: {item.upvotes}</Text>
                                        <View style={styles.buttonsContainer}>
                                            <TouchableOpacity onPress={() => this.props.upvoteRecipe(item)} style={styles.upvote}>
                                                <Text style={styles.upvoteText}>Upvote this recipe</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => this.props.downvoteRecipe(item)} style={styles.downvote}>
                                                <Text style={styles.downvoteText}>Downvote this recipe</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                </TouchableOpacity>

                            ))
                        }

                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    recipesContainer: {
        position: 'relative',
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#1976D2'
    },

    buttonsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },

    upvote: {
        backgroundColor: '#4CAF50',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        fontSize: 20,

    },

    downvote: {
        backgroundColor: '#F44336',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        fontSize: 20,
    },

    upvoteText: {
        color: 'white',
        fontSize: 20
    },

    downvoteText: {
        color: 'white',
        fontSize: 20
    },

    recipe: {
        fontSize: 20,
    },

    sortButton: {
        backgroundColor: '#1976D2',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        fontSize: 20,
        alignSelf: 'flex-end'
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center'
    },

})