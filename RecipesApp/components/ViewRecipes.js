import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { useIsFocused } from '@react-navigation/native';

import CenterMessage from './CenterMessage'

class ViewRecipes extends React.Component {

    state = {
        search: '',
        recipes: [],
        searchHappened: false,
    }

    navigate = (item) => {
        this.props.navigation.navigate('Recipe', { recipe: item })
    }

    searchRecipes = (text) => {
        
        let allRecipes = this.props.recipes
        let filteredRecipes = allRecipes.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()))
        this.setState({
            recipes: filteredRecipes,
            search: text,
            searchHappened: true,
        })
        

    }

    onChangeText = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    render() {

        const { isFocused } = this.props;

        if (!isFocused) {
            return null;
        }

        let { recipes, order } = this.props
        
        if (order === 'oldest') {
            recipes = recipes.sort((a, b) => a.id - b.id)
        }
        else if (order === 'recent') {
            recipes = recipes.sort((a, b) => b.id - a.id)
        }

        return (
            
            <View style={styles.container}>

                <ScrollView contentContainerStyle={[!recipes.length && { flex: 1 }]}>

                    <View style={[!recipes.length && { justifyContent: 'center', flex: 1 }]}>
                        
                        {
                            !recipes.length && <CenterMessage message='No saved recipes!' />
                        }
                        {
                            recipes.length > 0 &&

                            <View>

                                <View style={styles.searchContainer}>
                                    
                                    <TextInput style={styles.searchInput} placeholder='Search recipes...' onChangeText={(val) => this.onChangeText('search', val)} value = {this.state.search} />
                                    <TouchableOpacity onPress={() => this.searchRecipes(this.state.search)} style={styles.searchButton}>
                                        <Text style={{ justifyContent: "flex-end", color: "white", fontSize: 20 }}>Search</Text>
                                    </TouchableOpacity>
                                
                                </View>

                                <View>
                                    <View style={styles.searchResults}>
                                        <Text style={styles.searchResultsText}>Search results:</Text>
                                    </View>
                                </View>

                                {
                    
                                    this.state.searchHappened && this.state.recipes.length > 0 &&
                                    
                                    <View style={{borderBottomColor : '#1976D2', borderBottomWidth : 1}}>
                                        <TouchableOpacity onPress={() => this.props.sortRecipes(order)} style={styles.sortButton}>
                                            <Text style={{ justifyContent: "flex-end", color: "white"}}>Sort recipes : {order} </Text>
                                        </TouchableOpacity> 
                                    </View>

                                }
                                
                                {
                                    this.state.searchHappened &&

                                    this.state.recipes.map((item) => (

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
                                                    <TouchableOpacity onPress={() => this.props.deleteRecipe(item)} style={styles.delete}>
                                                        <Text style={styles.deleteText}>Delete this recipe</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
        
                                    ))
                                }

                                {
                                    this.state.searchHappened && !this.state.recipes.length &&

                                    <View style={styles.searchResults}>
                                        <Text style={styles.searchResultsText}>No recipes found!</Text>
                                    </View>
                                }

                                {
                                    !this.state.searchHappened &&

                                    <View style={{borderBottomColor : '#1976D2', borderBottomWidth : 1}}>

                                        <TouchableOpacity onPress={() => this.props.sortRecipes(order)} style={styles.sortButton}>
                                            <Text style={{ justifyContent: "flex-end", color: "white"}}>Sort recipes : {order} </Text>
                                        </TouchableOpacity> 

                                    </View>
                                
                                }
                                
                                {

                                    !this.state.searchHappened &&

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
                                                    <TouchableOpacity onPress={() => this.props.deleteRecipe(item)} style={styles.delete}>
                                                        <Text style={styles.deleteText}>Delete this recipe</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
        
                                        </TouchableOpacity>
        
                                    ))
                                }

                            </View>

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
        alignItems: 'flex-start',
        marginTop: 10,
        marginBottom: 10
    },

    upvote: {
        backgroundColor: '#4CAF50',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        fontSize: 20,
        width: '33%'
        
    },

    downvote: {
        backgroundColor: '#F44336',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        fontSize: 20,
        width: '33%'
    },

    upvoteText: {
        color: 'white',
        fontSize: 15
    },

    downvoteText: {
        color: 'white',
        fontSize: 15
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
        alignSelf: 'flex-start',
        width: '31.5%',
        marginLeft: 10,
        marginBottom: 10
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center'
    },
    searchInput: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        fontSize: 20,
        alignSelf: 'flex-start',
        width: '60%',
        marginLeft: 10
        
    },
    searchButton: {
        backgroundColor: 'green',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        fontSize: 20,
        alignSelf: 'flex-start',

    },
    searchContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    delete: {
        backgroundColor: 'black',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        fontSize: 20,
        alignSelf: 'flex-start',
        width: '33%'
    },
    deleteText: {
        color: 'white',
        fontSize: 15
    },
    searchResults: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 10,
    },
    searchResultsText: {
        fontSize: 20,
        color: 'black'
    }

})

export default function (props) {

    const isFocused = useIsFocused();

    if (!isFocused) {
        return null;
    }

    return <ViewRecipes {...props} isFocused={isFocused} />

}