// import React, { useMemo, useState } from 'react'

// function App() {

//   const[add, setAdd] = useState(0)
//   const[sub, setSub] = useState(0)

//   // function multiply(){                    //this func run every time in both the case add and sub
//   //   console.log("hy i am multiply function");
//   // }

//   const multi = useMemo(function multiply(){
//     console.log("hy i am multiply function");
//   },[sub]);

//   return (
//    <>
//     <h1>UseMemo Example</h1>
//     {/* {multiply} */}
//     {multi}
//     <button onClick={()=> setAdd(add+1)}>Add</button>
//     <span>{add}</span> &nbsp; &nbsp;  &nbsp; &nbsp;
//     <button onClick={()=> setSub(sub-1)}>Sub</button> &nbsp; &nbsp;
//       <span>{sub}</span>
//    </>
//   )
// }

// export default App


import React from 'react'
import ProductFilter from './ProductFilter'

function App() {
  return (
   <>
   <ProductFilter/>
   </>
  )
}

export default App



