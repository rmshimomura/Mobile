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
                
                <Text style={styles.headText}>Most recent recipe: {this.props.returnMostRecentRecipe() ? this.props.returnMostRecentRecipe().name : 'No recipes yet'}</Text>
                <Text style={styles.headText}>Most popular recipe: {this.props.returnMostPopularRecipe() ? this.props.returnMostPopularRecipe().name : 'No recipes yet'}</Text>
                
            </View>

        )

    }

}

const styles = StyleSheet.create({
    headText: {
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center',
    },
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    }
})