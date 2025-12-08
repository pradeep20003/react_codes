import React from 'react'
import Child2 from './Child2'

function Child1({city}) {
  return (
    <>
    <Child2 city = {city}/>
    </>
  )
}

export default Child1
