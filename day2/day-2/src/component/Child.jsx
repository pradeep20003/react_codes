import React from 'react'

function Child({color, name, age}) {
  return (
    <>
    <h1 style={{color: color}}> hy {name} and your age is {age}</h1>
    </>
  )
}

export default Child
