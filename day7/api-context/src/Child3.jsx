import React from 'react'
import { DataContext } from './App'
import { useContext } from 'react'

function Child3() {
    const name = useContext(DataContext)
  return (
    <>
    <h1>my institute name is {name}</h1>
    </>
  )
}

export default Child3
