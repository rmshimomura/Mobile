import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react'
import Calculator from './Calculator';

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
        <Calculator displayValue={this.state.result}/>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;