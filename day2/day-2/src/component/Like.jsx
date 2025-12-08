import React, { useState } from 'react'

const Like = () => {

    const [count, setCount] =useState(0);

    const increment =()=>{
        setCount(count+1);
    }

    function decrement(){
        setCount(count -1);
    }
    function reset(){
        setCount(0);
    }
  return (
  <>
   <h1>Like Appp</h1>
    <h2>❤️{count}</h2>
    <button onClick={increment}>Like</button>
    <button onClick={decrement}>Unlike</button>
    <button onClick={reset}>reset</button>
  </>
  )
}

export default Like
