import React, { useEffect, useState } from 'react'

function UseEffectHook() {

    const [number ,setnumber] = useState(0);
    const[number1, setNumber1]= useState(0)

    useEffect(()=> {
        console.log(`current state is ${number}`);
    },[number, number1])
  return (
   <>
   <button onClick={() => setnumber(number+1)}>increment</button>&nbsp; &nbsp;
   <span>{number}</span> &nbsp; &nbsp;
    <button onClick={() => setNumber1(number1 -1)}>decrement</button>&nbsp; &nbsp;
    <span>{number1}</span>&nbsp; &nbsp;
   
   </>
  )
}

export default UseEffectHook



// The useEffect Hook accepts two arguments:
// A callback function (the "effect"): This function contains the code that performs the side effect. 
// React will execute this function after every render of the component by default, including the initial render.
// An optional dependency array: This array controls when the effect function re-runs.
// If the dependency array is omitted, the effect runs after every render.
// If an empty array [] is provided, the effect runs only once after the initial render (similar to componentDidMount).
// If the array contains specific values (e.g., [count, name]), the effect re-runs only when any of those values change between renders.
