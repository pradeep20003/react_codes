import React, { useState } from 'react'
import Follower from './Follower'

const Folparent = () => {

    const [count , setCount] =useState(0)

    const increase = ()=>{

        setCount(count+1)
    }

    const decrease = () => {
    if (count > 0) {
      setCount(count - 1)
    } else {
      setCount(0)
    }
  }

  return (
  <>
  <h1>Follower Heading </h1>
   <Follower count = {count}/>
  <button onClick={increase}>FPlus</button>
  <button onClick={decrease}>FMinus</button>
  </>
  )
}

export default Folparent
