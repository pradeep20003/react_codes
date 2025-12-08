import React from 'react'
import { createContext } from 'react'
import Child1 from './Child1';
import Child3 from './Child3';

const DataContext = createContext();

function App() {
  const name ="debugshala"
  return (
    <>
    <DataContext.Provider value ={name}>
      <Child1/>
      <Child3/>
    </DataContext.Provider>
    </>
  )
}

export default App
export {DataContext}
