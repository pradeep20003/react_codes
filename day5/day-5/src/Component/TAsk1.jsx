import React, { useState } from 'react'

function TAsk1() {

   const[name, setName] =useState("");
   const[email, setEmail] = useState("");
   const[pass, setPass] =useState("");
    const [msg, setMsg] = useState("");

   function handleReg(event){
    if(event.target.name === 'firstName'){
         const capName = event.target.value.toUpperCase();
      setName(capName);
    }
   else  if (event.target.name === 'email1'){
        const email = event.target.value;
        setEmail(email)
    } else if(event.target.name === 'passw'){
      const pass =event.target.value
        setPass(pass)
    }
    else if (name && email && pass) {
      setMsg("Register Successful!");
      setName("");
      setEmail("");
      setPass("");
    } else{
      setMsg("enter all details");
    }
   }

  return (
    <>
    <form action="" >
        <label htmlFor="">UserName</label>
        <input type="text" value={name} name='firstName' onChange={handleReg}/><br />

        <label htmlFor="">Email</label>
        <input type="email" value={email} name='email1' onChange={handleReg} /><br />

        <label htmlFor="">Password</label>
        <input type="password" value={pass} name='passw' onChange={handleReg} />

     <button type="submit" onClick={handleReg} >Register</button>

    </form><br/>

    <p>Username :-{name} email :-{email} password:- {pass}</p>

        <p style={{ color: msg === "Register Successful!" ? 'green' : 'red' }}>
          {msg}
        </p>
    </>
  )
}

export default TAsk1
