import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"

class MyComponent extends React.Component {
   constructor() {
      super()

      this.state = {
         book: 'React Native in Action'
      }
   }
   updateBook() {

      if (this.state.book === 'React Native in Action') {
         this.setState({
            book: 'Express in Action'
         })
      } else {
         this.setState({
            book: 'React Native in Action'
         })
      }
   }
   render() {
      return (
         <BookDisplay updateBook={() => this.updateBook()} book={this.state.book} />
      )
   }
}

class BookDisplay extends React.Component {
   render() {
      return (
         <View>
            <Text onPress={this.props.updateBook}>
               {this.props.book}
            </Text>
         </View>
      )
   }
}

export default function App() {
   return (
      <View style={styles.container}>
         <MyComponent />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#c71585',
      alignItems: 'center',
      justifyContent: 'center',
   },

   text: {
      fontSize: 50,
      color: '#fff',
      fontFamily: 'Arial',
   }
});