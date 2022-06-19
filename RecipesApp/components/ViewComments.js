import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Alert,
    Platform

} from 'react-native'

import CenterMessage from './CenterMessage'

export default class Recipe extends React.Component {

    state = {
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

            if(Platform.OS === 'android' || Platform.OS === 'ios') {


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

            } else {

                alert('Rating must be between 0 and 5')
            
            }

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

        if (!recipe.comments.length) {
            recipe.rating = this.state.rating
        } else {
            let sum = 0
            recipe.comments.forEach(comment => {
                sum += parseInt(comment.rating)
            }
            )
            recipe.rating = sum / recipe.comments.length
        }

        this.setState({ commentText: '', commentAuthor: '', comments: recipe.comments, recipe, rating: '' })
    }

    render() {

        const { recipe } = this.props.route.params

        return (

            <View 
                style={styles.container}
            >

                <ScrollView>

                    <View>

                        {recipe.comments.length === 0 && <CenterMessage message="No comments yet" />}
                        {
                            recipe.comments.length > 0 && <Text style={styles.score}>Overall recipe rating: {parseFloat(recipe.rating)}/5</Text>
                        }
                        {
                            recipe.comments.length > 0 && recipe.comments.map((comment, index) => {
                                return (
                                    <View key={index} style={styles.commentInfo}>
                                        <Text style={styles.comment}>Comment: "{comment.commentText}"</Text>
                                        <Text style={styles.comment}>Author: {comment.commentAuthor}</Text>
                                        <Text style={styles.comment}>Rating: {comment.rating}</Text>
                                    </View>
                                )
                            })

                        }
                    </View>

                </ScrollView>

                <View style={styles.commentForm}>

                    <View style={styles.commentTitle}>

                        <Text style={styles.commentFormText}>Add comment</Text>

                    </View>

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
                        placeholder='Insert your rating here...([0-5])'
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
    commentForm: {
        width: '100%',
        bottom: 0,
        left: 0,
        right: 0,
        position: 'relative',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#1976D2',
    },
    score: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
        paddingLeft: 10,
    },
    addComment: {
        position: 'relative',
        padding: 10,
        borderColor: '#1976D2',
        borderWidth: 2,
        margin: 10,
        width: '50%'

    },
    comment: {
        fontSize: 20,
        marginBottom: 10
    },
    commentInfo: {
        padding: 10,
        borderBottomColor: '#1976D2',
        borderBottomWidth: 2,
        position: 'relative',
        width: '100%'
    },
    commentFormText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
        paddingLeft: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    commentTitle: {
        position: 'relative',
        padding: 10,
        borderColor: '#1976D2',
        borderWidth: 2,
        margin: 10,
        width: '50%'   
    }
})
