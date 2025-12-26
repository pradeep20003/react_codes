import React from 'react'
import { useState } from 'react'

function App() {

  const [email, setEmail] = useState("")
  const[password, setPassword]= useState("");
  const[message, setMessage] = useState('');

  const handleSubmit =(e)=>{
    e.preventDefault();
   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%*?&]).{8,}$/;

    if(!emailRegex.test(email)){
      setMessage("Invalid Email")
      return;
    }if(!passwordRegex.test(password)){
      setMessage("Invalid Password")
      return;
    }
      const UserData = {email, password}
  localStorage.setItem("users", JSON.stringify(UserData))
  setMessage("saved successfully....")
  setEmail('');
  setPassword('');
  }


  return (
    <>
    <form onSubmit={handleSubmit}>
    Email: <input type="text" placeholder='Enter email ' value={email}
    onChange={(e) =>setEmail(e.target.value)}/> <br />

     Password: <input type="text" placeholder='Enter password ' value={password}
    onChange={(e) =>setPassword(e.target.value)}/> <br />
    <button type='submit'>Submit</button>
    </form>
    <p>{message}</p>
    </>
  )
}

export default App
