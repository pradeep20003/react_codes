import React from 'react'
import useCounter from './useCounter'


function CounterTwo() {
    const[count, Increment, Decrement,reset]= useCounter(10)
  return (
   <>
   <h3>Counter two</h3>
   <p>{count}</p>
   <button onClick={Increment}>Increment</button>
   <button onClick={Decrement}>Decrement</button>
   <button onClick={reset}>Reset</button>
   </>
  )
}
export default CounterTwo
