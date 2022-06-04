import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react'
import Calculator from './Components/Calculator.js';

const initialState = {

  displayValue: '0', // The value that is currently being displayed on the screen
  clearDisplay: false, // A flag that indicates whether the display should be cleared or not
  previousOperation: null, // The last operation that was performed
  operation: null, // The current operation that is being performed
  values: [null, null], // The values that are currently being used
  currentPositionOnValues: 0, // The current position on the values array
  originalValue: 0 // The original value that is being used

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

    // Prevent double decimals
    if (digit === "." && this.state.displayValue.includes('.')) {

      return

    }

    /* 
        Boolean value saying if it's necessary to clear the display
        True if the currentValue display value is 0 or the variable this.state.clearDisplay is set to true
        This is the case the user wants to write a new number, or if the user wants to clear the display
    */
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay


    /* 
        currentValue shows the 'cleared' value or the display value
        If the display value is 0, it will be an empty string
        If the display value is not 0, it will be the display value
    */
    const currentValue = clearDisplay ? '' : this.state.displayValue


    const displayValue = currentValue + digit

    this.setState({ displayValue: displayValue, clearDisplay: false })

    if (digit !== '.') {

      const i = this.state.currentPositionOnValues // The current position on the values array
      const newValue = parseFloat(displayValue) // The new value that is being added to the array
      const values = [...this.state.values] // The values array
      values[i] = newValue // The new value is added to the array
      this.setState({ values: values }) // The values array is updated

    }

  }

  setOperation(operation) {

    if (this.state.currentPositionOnValues === 0) {
      // The user is setting the first value as well as the operation

      if(this.state.values[0] === null) {

        let values = [...this.state.values]
        values[0] = parseFloat(this.state.displayValue)
        this.setState({ values: values })

      }

      this.setState({ operation: operation, currentPositionOnValues: 1, clearDisplay: true, previousOperation: operation }) 

    } else if (this.state.previousOperation !== null && this.state.values[1] === null && (operation === '+' || operation === '-' || operation === '*' || operation === '/')) {

      // The user is changing the operation
      this.setState({ operation: operation, previousOperation: operation, clearDisplay : true })

    } else {

      // The user is setting the second value with the previous operation
      let originalValue = this.state.originalValue

      if (this.state.values[1] !== null) {
        // Original value is used if the user presses the equal button and the last operation needs to be repeated
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

      let values = [...this.state.values]

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
      // Check if the value is valid or not (preventing 0/0 and other invalid operations)
      if (isNaN(values[0]) || !isFinite(values[0])) {
        this.clear()
        return
      }

      // Restart the second value
      values[1] = null

      this.setState(

        {
          displayValue: values[0],
          operation: equals ? null : operation,
          currentPositionOnValues: 1,
          clearDisplay: !equals,
          values: values,
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

        <Text style={styles.head}>Calculator</Text>
        <Calculator
          addDigit={(digit) => {
            this.addDigit(digit);
          }}
          clear={() => {
            this.clear()
          }}
          setOperation={(operation) => {
            this.setOperation(operation)
          }}
          displayValue={this.state.displayValue}
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
    backgroundColor: '#486787',

  },
  head: {

    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
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