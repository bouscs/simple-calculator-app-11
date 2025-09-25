import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('0')
  const [operator, setOperator] = useState('')
  const [firstNumber, setFirstNumber] = useState('')

  const handleNumber = (num: string) => {
    if (display === '0' || operator) {
      setDisplay(num)
    } else {
      setDisplay(display + num)
    }
    if (operator) {
      setOperator('')
    }
  }

  const handleOperator = (op: string) => {
    setFirstNumber(display)
    setOperator(op)
  }

  const calculate = () => {
    if (!operator || !firstNumber) return
    const num1 = parseFloat(firstNumber)
    const num2 = parseFloat(display)
    let result = 0

    switch (operator) {
      case '+':
        result = num1 + num2
        break
      case '-':
        result = num1 - num2
        break
      case '*':
        result = num1 * num2
        break
      case '/':
        result = num1 / num2
        break
    }

    setDisplay(result.toString())
    setOperator('')
    setFirstNumber('')
  }

  const clear = () => {
    setDisplay('0')
    setOperator('')
    setFirstNumber('')
  }

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={clear}>C</button>
        <button onClick={() => handleOperator('/')}>/</button>
        <button onClick={() => handleOperator('*')}>*</button>
        <button onClick={() => handleOperator('-')}>-</button>
        
        <button onClick={() => handleNumber('7')}>7</button>
        <button onClick={() => handleNumber('8')}>8</button>
        <button onClick={() => handleNumber('9')}>9</button>
        <button onClick={() => handleOperator('+')}>+</button>

        <button onClick={() => handleNumber('4')}>4</button>
        <button onClick={() => handleNumber('5')}>5</button>
        <button onClick={() => handleNumber('6')}>6</button>
        <button onClick={calculate}>=</button>

        <button onClick={() => handleNumber('1')}>1</button>
        <button onClick={() => handleNumber('2')}>2</button>
        <button onClick={() => handleNumber('3')}>3</button>
        <button onClick={() => handleNumber('0')}>0</button>
      </div>
    </div>
  )
}

export default App