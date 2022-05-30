import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react'
import Calculator from './Calculator';
import { LinearGradient } from 'expo-linear-gradient';

const initialState = {

  displayValue: '0',
  clearDisplay: false,
  previousOperation: null,
  operation: null,
  values: [null, null],
  currentPositionOnValues: 0,
  originalValue: 0

}

class App extends Component {
  
  constructor(props) {
    
    super(props);
    
    this.state = { ...initialState }
    this.clear = this.clear.bind(this);
    this.addDigit = this.addDigit.bind(this);
    this.setOperation = this.setOperation.bind(this);

  }

  clear() {
    this.setState({ ...initialState });
  }

  addDigit(digit) {

    console.log(digit)

    if (digit === "." && this.state.displayValue.includes('.')) {

      // Prevent double decimals
      return

    }

    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

    /* 
        Boolean value saying if it's necessary to clear the display
        True if the currentValue display value is 0 or the variable this.state.clearDisplay is set to true
    */

    const currentValue = clearDisplay ? '' : this.state.displayValue

    /* 
        currentValue shows the 'cleared' value or the display value
    */

    const displayValue = currentValue + digit

    this.setState({ displayValue: displayValue, clearDisplay: false })

    if (digit !== '.') {

      const i = this.state.currentPositionOnValues
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[i] = newValue
      this.setState({ values: values })

    }

  }

  setOperation(operation) {

    if (this.state.currentPositionOnValues === 0) {

      this.setState({ operation: operation, currentPositionOnValues: 1, clearDisplay: true, previousOperation: operation })

    } else if (this.state.previousOperation !== null && this.state.values[1] === null && (operation === '+' || operation === '-' || operation === '*' || operation === '/')) {

      this.setState({ operation: operation, previousOperation: operation })

    } else {

      let originalValue = this.state.originalValue

      if (this.state.values[1] !== null) {

        originalValue = this.state.values[1]

      }

      const equals = operation === '='

      let currentOperation = null;

      if (this.state.operation) {

        currentOperation = this.state.operation

      } else {

        currentOperation = operation

      }

      let previousOperation = this.state.previousOperation;

      if (currentOperation !== '=' && currentOperation !== null) previousOperation = currentOperation

      const values = [...this.state.values]

      if (values[1] === null) this.previousOperation = operation

      switch (currentOperation) {

        case '+':
          values[0] += values[1]
          break

        case '-':
          values[0] -= values[1]
          break

        case '*':
          values[0] *= values[1]
          break

        case '/':
          values[0] /= values[1]
          break

        case '=':
          if (this.state.values[1] === null)
            this.repeatOperation(values, this.state.originalValue, this.state.previousOperation)
          break

        default:

          break

      }

      if (isNaN(values[0]) || !isFinite(values[0])) {
        this.clear()
        return
      }

      values[1] = null

      this.setState(

        {
          displayValue: values[0],
          operation: equals ? null : operation,
          currentPositionOnValues: values[0] !== 0 ? 1 : 0,
          clearDisplay: !equals,
          values,
          previousOperation,
          originalValue
        }

      )

    }

  }

  repeatOperation(values, originalValue, previousOperation) {

    switch (previousOperation) {

      case '+':
        values[0] += originalValue
        break

      case '-':
        values[0] -= originalValue
        break

      case '*':
        values[0] *= originalValue
        break

      case '/':
        values[0] /= originalValue
        break

      default:
        return

    }

  }


  render() {

    return (
      <View style={styles.container}>

        <LinearGradient
          colors={['#4b6cb7', '#182848']}
          style={styles.background}
          start={[1, 1]} end={[0, 0]}
        >
        </LinearGradient>
        <Text style={styles.head}>Calculator</Text>
        <Calculator
          addDigit={() => this.addDigit}
          clear={() => this.clear}
          setOperation={() => this.setOperation}
          displayValue = {this.state.displayValue}
        />
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