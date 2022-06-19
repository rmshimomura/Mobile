import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native'
import { useIsFocused } from '@react-navigation/native';

class Home extends React.Component {

    render() {
        
        const { isFocused } = this.props;

        if (!isFocused) {
            return null;
        }

        return (

            <View style={styles.container}>
                
                <Text style={styles.headText}>Most recent recipe: {this.props.returnMostRecentRecipe() ? this.props.returnMostRecentRecipe().name : 'No recipes yet'}</Text>
                <Text style={styles.headText}>Most popular recipe: {this.props.returnMostPopularRecipe() ? this.props.returnMostPopularRecipe().name + " (" + this.props.returnMostPopularRecipe().upvotes + " upvotes)" : 'No recipes yet'}</Text>
                <Text style={styles.headText}>Top rated recipe: {this.props.returnTopRatedRecipe() ? this.props.returnTopRatedRecipe().name + " (" + this.props.returnTopRatedRecipe().rating + "/5 stars)" : 'No recipes yet'}</Text>

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

export default function(props) {
    const isFocused = useIsFocused();

    if (!isFocused) {
        return null;
    }
    return <Home {...props} isFocused={isFocused}/>;
}