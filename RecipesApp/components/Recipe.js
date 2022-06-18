import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native'

import CenterMessage from './CenterMessage'

class Recipe extends React.Component {

    state = {
        ingredients: [],
        ingredientsString: '',
        comments: [],
        commentAuthor: '',
        commentText: '',
        rating: '',
    }
    onChangeText = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    onChangeRating = (value) => {

        if (value === 'Insert your rating here...' || value === '') {
            return
        }

        let temp = parseInt(value)

        if (temp <= 5) {

            this.setState({
                rating: value.replace(/[^0-9]/g, '')
            })

        } else {

            Alert.alert(
                'Error',
                'Rating must be between 0 and 5',
                [
                    {
                        text: 'Go back',
                        style: 'destructive',
                    },

                ]
            )

        }

    }

    addComment = () => {

        if (this.state.commentText === '' || this.state.commentAuthor === '' || this.state.rating === '0' || this.state.rating === '') {
            Alert.alert(
                'Error',
                'Please fill in all fields',
                [
                    {
                        text: 'Go back',
                        style: 'destructive',
                    },

                ]
            )
            return
        }

        const { recipe } = this.props.route.params

        const comment = {

            commentText: this.state.commentText,
            commentAuthor: this.state.commentAuthor,
            rating: this.state.rating

        }

        recipe.comments.push(comment)

        this.setState({ commentText: '', commentAuthor: '', comments: recipe.comments, recipe, rating: '' })
    }

    returnOverallRating = () => {

        const { recipe } = this.props.route.params

        let sum = 0

        recipe.comments.forEach(comment => {
            sum += parseInt(comment.rating)
        }
        )

        if (recipe.comments.length === 0) {

            return 0

        } else {

            return sum / recipe.comments.length

        }

        console.log("!")

    }

    render() {
        const { recipe } = this.props.route.params
        return (
            <View style={styles.container}>

                <ScrollView contentContainerStyle={[!recipe.comments.length && { flex: 1, zIndex: 100 }]} >
                    <View style={[styles.commentsContainer, !recipe.comments.length && { flex: 1, justifyContent: 'center' }]}>
                        {
                            !recipe.comments.length && <CenterMessage message='No comments for this recipe!' />
                        }
                        {
                            recipe.comments.length > 0 && <Text style={styles.score}>Overall recipe rating: {parseFloat(this.returnOverallRating()).toFixed(2)}/5</Text>
                        }
                        {
                            recipe.comments.map((comment, index) => (
                                <View key={index} style={styles.commentsContainer}>
                                    <Text style={styles.comment}>Comment: "{comment.commentText}"</Text>
                                    <Text style={styles.comment}>Author: {comment.commentAuthor}</Text>
                                    <Text style={styles.comment}>Rating: {comment.rating}</Text>
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
                        style={[styles.input]}
                        placeholderTextColor='white'
                    />

                    <TextInput
                        onChangeText={val => this.onChangeRating(val)}
                        placeholder='Insert your rating here...'
                        style={[styles.input]}
                        value={this.state.rating}
                        placeholderTextColor='white'
                        keyboardType='numeric'
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
        position: 'relative',
        width: '100%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    buttonContainer: {
        position: 'relative',
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
        borderBottomWidth: 2,
        position: 'relative',
    },
    commentForm: {
        width: '100%'
    },
    commentsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    score: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10
    }
})

export default Recipe