Task of the Controlled Component :- 


import React, { useState } from 'react'

function Ragistration() {
   const[data,setData] = useState({
         username:"",
         email:"",
         password:"",
    });
  const[mess,setMess] =  useState("");

  const handleChange = (e)=>{
    const {name ,value} = e.target;
    setData({...data , [name]:value}) // [username]:yogesh || [email]:"y@gamilcom" || password :y@123
  }

  //handle form submit

  const handleSubmit = (e)=>{
       e.preventDefault();

     const{username, email , password} = data ;

     if(!username || !email || !password){
        setMess("sari field fill kro ")
     }else if(!email.includes("@") || !email.includes(".")){
       setMess("please enter a valid email");
     }else{
        setMess("Register SuccessFully");

        setData({username:"",email:"", password:""});
     }
  }

  return (
    <>
     <form onSubmit={handleSubmit}>
        <h2>Ragistration form</h2>
      <div>
          <label htmlFor="">Username :</label>
        <input type="text" name='username' value={data.username} onChange={handleChange} />
      </div>

        <div>
          <label htmlFor="">email :</label>
        <input type="email" name='email' value={data.email} onChange={handleChange} />
      </div>

        <div>
          <label htmlFor="">Password :</label>
        <input type="password" name='password' value={data.password} onChange={handleChange} />
      </div>
      <button type='submit'>Register</button>
     </form>

     {/* live data  */}
     <div>
        <h2>data :-</h2>
         <p>username : {data.username}</p>
         <p>Email : {data.email}</p>
         <p>Password : {"*".repeat(data.password.length)}</p>
     </div>

     {mess && (
        <p>{mess}</p>
     )}
    </>
  )
}

export default Ragistration


// name  yogesh
// email  y@gmail.com
// password y@123

// repeat(3)   * -> *****

// String s1 = you












Task 2.  – Simple Registration Form (Uncontrolled with useRef)

Fields Required:

1. Full Name (text input)
2. Email (email input)
3. Password (password input)
4. Confirm Password (password input)

Requirements:
1. Use useRef for each input (do not use useState).
2. On form submission:
      -> Prevent page refresh.
      -> Collect all input values using ref.current.value.
      -> Validate:
           -> All fields must be filled.
           -> Password and Confirm Password must match.
      -> Show collected data in console as an object.
      -> Show an alert "Registration Successful!" if validation passes.