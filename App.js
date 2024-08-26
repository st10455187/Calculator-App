import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState(''); {/*Initialize as empty, and will store the first number */}
  const [num2, setNum2] = useState('');  {/*Initialize as empty, and will store the second number */}
  const [operator, setOperator] = useState(''); {/*Initialize as empty, and will store the operation we want to perform (e.g add, minus, divide and times) */}
  const [answer, setAnswer] = useState(null);

{/*Check to see if i entered an operator (+, -, x, /), if not then the number will be stored as the first number, if i alresdy entered an operator then it will save the number i enter as the second number */}
  const addToNumber = (input) => {
    if (!operator) {
      setNum1(num1 + input);
    } else {
      setNum2(num2 + input);
    }
  };

{/*function to perform the calculation*/}
  const calculate = () => {
    const n1 = parseFloat(num1); {/*Ensuring that number is not being stored as a string for example 6 + 2 would give us 62, so parseFloat prevents that */}
    const n2 = parseFloat(num2);
    let result; {/*variable declaration to store the final result */}

{/*checking which operator is being clicked and perfoming an action based on that operator */}
    if (operator === '+') {
      result = n1 + n2;
    } else if (operator === '-') {
      result = n1 - n2;
    } else if (operator === 'x') {
      result = n1 * n2;
    } else if (operator === '/') {
      result = n1 / n2;
    } else if (operator === '²') {
      result = n1 * n1;
    } else if (operator === '³') {
      result = n1 * n1 * n1;
    } else if (operator === '✓') {
      result = Math.sqrt(n1); {/*doesn't want to perform the square root, will fix and push to github when sorted out */}
      return;
    }

    setAnswer(result);
  };

{/*Clearing the info */}
  const clear = () => {
    setNum1('');
    setNum2('');
    setOperator('');
    setAnswer("Cleared"); {/*I will display this message when answer is being cleared */}
  };

  return (
    <View style={styles.container}>
    
      <Text style={styles.display}>
        {num1} {operator} {num2}
      </Text>

      <View style={styles.btnBlock}>
        <TouchableOpacity style={styles.operatorButton} onPress={() => setOperator('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton} onPress={() => setOperator('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton} onPress={() => setOperator('x')}>
          <Text style={styles.buttonText}>x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton} onPress={() => setOperator('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnBlock}>
        <TouchableOpacity style={styles.button} onPress={() => addToNumber('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => addToNumber('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => addToNumber('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton} onPress={() => setOperator('²')}>
          <Text style={styles.buttonText}>²</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnBlock}>
        <TouchableOpacity style={styles.button} onPress={() => addToNumber('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => addToNumber('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => addToNumber('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton} onPress={() => setOperator('³')}>
          <Text style={styles.buttonText}>³</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnBlock}>
        <TouchableOpacity style={styles.button} onPress={() => addToNumber('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => addToNumber('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => addToNumber('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton} onPress={() => setOperator('✓')}>
          <Text style={styles.buttonText}>✓</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnBlock}>
        <TouchableOpacity style={styles.button} onPress={() => addToNumber('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => addToNumber('.')}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.clearButton} onPress={clear}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.calculateButton} onPress={calculate}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>

      {answer !== null && <Text style={styles.answerText}>Answer: {answer}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  display: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  btnBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'grey',
    padding: 20,
    borderRadius: 10,
    width: '22%',
    alignItems: 'center',
  },
  operatorButton: {
    backgroundColor: 'dodgerblue',
    padding: 20,
    borderRadius: 10,
    width: '22%',
    alignItems: 'center',
  },
  calculateButton: {
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 10,
    width: '22%',
    alignItems: 'center',
  },
  clearButton: {
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 10,
    width: '22%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  answerText: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
