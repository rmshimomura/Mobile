import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView

} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'


class Recipe extends React.Component {

    state = {
        ingredients: [],
        ingredientsString: '',
        rating: '',
    }

    render() {
        const { recipe } = this.props.route.params
        return (
            <View style={styles.container}>

                <ScrollView>
                    <View style={styles.recipeInfo}>
                        <Text style={styles.recipeName}>Recipe: {recipe.name}</Text>
                        <Text style={styles.recipeIngredients}>Recipe ingredients: </Text>
                        {
                            recipe.ingredients.map((ingredient, index) => {
                                return (
                                    <Text key={index} style={styles.recipeIngredients}>{"-> " + ingredient}</Text>
                                )
                            })
                        }
                        <Text style={styles.recipeInstructions}>Recipe instructions:</Text>
                        {recipe.instructions.map((instruction, index) => {
                            return <Text key={index} style={styles.recipeInstructions}>{index + 1}. {instruction}</Text>
                        }
                        )}
                        <Text style={styles.recipeIngredients}>Overall rating: {!recipe.rating ? 0 : recipe.rating}/5</Text>
                    </View>
                </ScrollView>

                <TouchableHighlight

                    onPress={() => {
                        this.props.navigation.navigate('View comments', { recipe })
                    }
                    }
                    >
                    <View style={styles.viewComment}>
                        <Text style={styles.viewCommentText}>View comments</Text>
                    </View>
                </TouchableHighlight>
                
                    
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center'
    },
    recipeInfo: {
        padding: 10,
        borderBottomColor: '#1976D2',
        borderBottomWidth: 2,
        position: 'relative',
        width: '100%'
    },

    recipeName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    recipeIngredients: {
        fontSize: 20,
        marginBottom: 10
    },
    recipeInstructions: {
        fontSize: 20,
        marginBottom: 10
    },
    comment: {
        fontSize: 20,
        marginBottom: 10
    },
    viewComment: {
        position: 'relative',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        padding: 10,
        borderTopColor: 'black',
        borderTopWidth: 2,
        alignItems: 'center'
    },
    viewCommentText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    }


})

export default Recipe