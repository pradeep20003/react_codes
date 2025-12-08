// // contolled and uncontroll form 
// //  import React from 'react'
 
// //  function App() {
// //    return (
// //      <>
// //      <form action="">
// // <label htmlFor="">FirstNAme :- </label>
// // <input type="text" value= "pradeep" />

// // {/* props :- immutable , we can not change of this  */}
// //      </form>
// //      </>
// //    )
// //  }
 
// //  export default App
 




// // import React, { useState } from 'react'
// // import Comp1 from './Component/Comp1';

// // function App() {
// //    const[name, setName]= useState("");
// //    const[password , setPassword] = useState("")  

// //    function handleChange(event){
// //    const capName = event.target.value.toUpperCase();
// //   //  console.log(capName);
// //    setName(capName);
// //    }

// //    function handlePasswoed(event){
// //     setPassword(event.target.password)
// //    }
// //   return (
// //     <>
// //     <form action="">
// //       <label htmlFor="">FirstName :- </label>
// //       <input type="text" placeholder='Enter your name' value={name} onChange={handleChange} /><br />

// //       <label htmlFor="">Password :-</label>
// //       <input type="text" placeholder='enter your password' value={password} onChange={handlePasswoed} />
// //     </form>

// //     <Comp1 name = {name} password = {password} color ="red"/>
  
// //     </>
// //   )
// // }

// // export default App


// import React, { useState } from 'react'
// import TAsk1 from './Component/TAsk1';
// // import Comp1 from './Component/Comp1';
// function App() {
//   //  const[name, setName]= useState("");
//   //  const[password , setPassword] = useState("")  

//   //  function handleChange(event){
//   //  const capName = event.target.value.toUpperCase();
//   // //  console.log(capName);
//   //  setName(capName);
//   //  }

//   //  function handlePasswoed(event){
//   //   setPassword(event.target.password)
//   //  }

//   //  function handleChange(event){
//   //   if(event.target.name === 'firstName'){
//   //     const capName = event.target.value.toUpperCase();
//   //     setName(capName);
//   //   }else{
//   //     setPassword(event.target.value)
//   //   }
//     // }
//   return (
//     <>
//     {/* <form action="">
//       <label htmlFor="">FirstName :- </label>
//       <input type="text" placeholder='Enter your name' value={name} onChange={handleChange} name='firstName' /><br />

//       <label htmlFor="">Password :-</label>
//       <input type="text" placeholder='enter your password' value={password} onChange={handleChange} name='pass' />
//     </form>

//     <Comp1 name = {name} password = {password} color ="red"/> */}
//     <TAsk1/>
  
//     </>
//   )
// }


// export default App


import React from 'react'
import TAsk1 from './Component/TAsk1'

function App() {
  return (
   <>
   <TAsk1/>
   </>
  )
}

export default App

