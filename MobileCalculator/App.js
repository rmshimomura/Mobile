import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react'
import Calculator from './Calculator';
import { LinearGradient } from 'expo-linear-gradient';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      num1: '',
      num2: '',
    };
  
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);

  }

  add() {
    let result = parseInt(this.state.num1) + parseInt(this.state.num2);
    this.setState({ result: result });
  }

  subtract() {
    let result = parseInt(this.state.num1) - parseInt(this.state.num2);
    this.setState({ result: result });
  }

  multiply() {
    let result = parseInt(this.state.num1) * parseInt(this.state.num2);
    this.setState({ result: result });
  }

  divide() {
    let result = parseInt(this.state.num1) / parseInt(this.state.num2);
    this.setState({ result: result });
  }

  clear() {
    this.setState({ result: 0, num1: '', num2: '' });
  }

  render() {

    let { result, num1, num2 } = this.state;

    return (
      <View style={styles.container}>

        <LinearGradient
          colors={['rgb(83, 105, 118)', 'rgb(41,46,73)']}
          style={styles.background}
        >
        </LinearGradient>
        <Text style={styles.head}>Calculator</Text>
        <Calculator displayValue={result}/>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    zIndex: 100,
    fontFamily: 'monospace',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
});

export default App;