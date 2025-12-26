import React from 'react'
import useCounter from './useCounter'

function CounterOne() {
    const[count,Increment,Decrement] = useCounter(0);
  return (
    <>
    <h2>Counter One</h2>
    <p>{count}</p>
    <button onClick={Increment}>+</button>
    <button onClick={Decrement}>-</button>
    </>
  )
}

export default CounterOne
