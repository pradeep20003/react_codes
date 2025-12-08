import React, { useState } from 'react'
import Child1 from './Child1'


function Parent1() {

    const [name, setName] = useState();
  return (
   <>
   <h1> Props and State Example</h1>
   <input type="text" placeholder='Enter your Name ' value={name}
   onChange={(e) => setName(e.target.value)} />

 <Child1 name={name} color="blue"/>
 <Child1 name={name} color="blue"/>
   </>
  );
}

export default Parent1
