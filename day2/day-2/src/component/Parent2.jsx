import React, { useState } from 'react'
import Child2 from './Child2';

const Parent2 = () => {

    const [name, SetName] =useState();
    const [sir, SetSir] = useState();
  return (
    <>
    <h1>Show your complete name </h1>
    <input type="text" name="name" placeholder='Enter your first name'  value={name}
    onChange={(e)=> SetName(e.target.value)}/>
    <input type="text" name="name" placeholder='Enter your Last name'  value={sir}
    onChange={(e)=> SetSir(e.target.value)}/>

    <Child2 name={name } sir ={sir}  />
    
    </>
  )
}

export default Parent2
