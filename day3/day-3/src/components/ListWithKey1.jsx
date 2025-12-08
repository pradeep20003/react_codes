import React from 'react'

function ListWithKey1() {

    const numbers = [1,2,3,4,5,6,7];

   const items = numbers.map((num,index)=> <li key={index}>{num}</li> )
  return (
    <>
    <h1>Number List</h1>
    <ul>{items}</ul>
    </>
  )
}

export default ListWithKey1