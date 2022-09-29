import { evaluate } from 'mathjs'
import { useState } from 'react'

export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const rows = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  [0]
]

export const operations = ['+', '-', '*', '/']

export const equalSign = '='

export const Calculator = () => {
  const [value, setValue] = useState('')

  const onHandleClick = (number) => setValue((prevState) => prevState.concat(number))

  return (
    <div>
      <h1>Calculator</h1>
      <input value={value} readOnly />
      {rows.map((row, idx) =>
        <div role='row' key={idx}>
          {row.map(number => (
            <button
              onClick={() => onHandleClick(number)}
              key={number}
            >
              {number}
            </button>
          ))}
        </div>
      )}
      {operations.map((operation) =>
        <button
          onClick={() => onHandleClick(operation)}
          key={operation}
        >
          {operation}
        </button>
      )}
      <button onClick={() => setValue(evaluate(value))}>{equalSign}</button>
    </div>
  )
}
