import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity
} from 'react-native'

import CenterMessage from './CenterMessage'


class Recipe extends React.Component {
    state = {
        name: '',
        ingredients: [],
        ingredientsString: '',
        upvotes: 0,
        comments: [],
    }
    onChangeText = (key, value) => {
        this.setState({
            [key]: value
        })
    }
    addComment = () => {
        console.log(this.state)
        if (this.state.commentText === '' || this.state.commentAuthor === '') return
        const { recipe } = this.props.route.params
        const comment = {
            commentText: this.state.commentText,
            commentAuthor: this.state.commentAuthor,
            rating: this.state.rating
        }
        recipe.comments.push(comment)
        this.setState({ commentText: '', commentAuthor: '', comments: recipe.comments, recipe, rating : 0 })
    }

    render() {
        const { recipe } = this.props.route.params
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={[!recipe.comments.length && { flex: 1 }]}>
                    <View style={[styles.commentsContainer, !recipe.comments.length && { flex: 1, justifyContent: 'center' }]}>
                        {
                            !recipe.comments.length && <CenterMessage message='No comments for this recipe!' />
                        }
                        {
                            recipe.comments.map((comment, index) => (
                                <View key={index} style={styles.commentsContainer}>
                                    <Text style={styles.comment}>Comment {comment.commentText}</Text>
                                    <Text style={styles.comment}>Author {comment.commentAuthor}</Text>
                                    <Text style ={styles.comment}>Rating {comment.rating}</Text>
                                </View>
                            ))
                        }
                    </View>
                </ScrollView>

                <View style={styles.commentForm}>
                
                    <TextInput
                        onChangeText={val => this.onChangeText('commentAuthor', val)}
                        placeholder='Insert your name here...'
                        value={this.state.commentAuthor}
                        style={styles.input}
                        placeholderTextColor='white'
                    />
                    <TextInput
                        onChangeText={val => this.onChangeText('commentText', val)}
                        placeholder='Insert your comment here...'
                        value={this.state.commentText}
                        style={[styles.input, styles.input2]}
                        placeholderTextColor='white'
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={this.addComment}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Add comment</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
    },

    input: {
        height: 50,
        backgroundColor: '#1976D2',
        color: 'white',
        paddingHorizontal: 8,
        position: 'absolute',
        width: '100%',
        bottom: 100,
        left: 0
    },
    input2: {
        bottom: 50
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%'
    },
    button: {
        height: 50,
        backgroundColor: '#1976D2',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white'
    },
    commentsContainer: {
        padding: 10,
        borderBottomColor: '#1976D2',
        borderBottomWidth: 2
    },
    commentsName: {
        fontSize: 20
    },
    // Make commentForm stick to the bottom of the screen
    commentForm: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%'
    }
})

export default Recipe