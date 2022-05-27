import React from 'react'
import { View, StyleSheet } from 'react-native'
import TabBarItem from './TabBarItem'

const TabBar = ({ setType, type }) => (
    <View style={styles.container}>

        <TabBarItem type={type} title="All" setType={() => setType('All')}/>

        <TabBarItem type={type} title="Active" setType={() => setType('Active')}/>

        <TabBarItem type={type} title="Completed" setType={() => setType('Completed')}/>

        <TabBarItem type={type} title="Favorites" setType={() => setType('Favorite')}/>

    </View>
)

const styles = StyleSheet.create({
    container: {
        height: 70,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#dddddd',
    },
})

export default TabBar