import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native'

export default class Home extends React.Component {

    render() {

        return (

            <View style={styles.container}>
                <Text>Most recent recipe: {this.props.returnMostRecentRecipe() ? this.props.returnMostRecentRecipe().name : 'No recipes yet'}</Text>
                <Text>Most popular recipe: {this.props.returnMostPopularRecipe() ? this.props.returnMostPopularRecipe().name : 'No recipes yet'}</Text>
            </View>

        )

    }

}

const styles = StyleSheet.create({
    headText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'left',
        justifyContent: 'center',
    }
})