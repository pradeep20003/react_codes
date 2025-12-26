import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {

  const navigate =useNavigate();   // it is a hook for navigate the page by button.
  const myName = "jay"
  function GoAbout(){
    navigate("/about", {state : {name: myName}})
  }
    function GoContact(){
    navigate("/contact")
  }
  return (
    <>
    <h1>hi</h1>
    <Link to ="/about">click for about page</Link><br />
        <Link to ="/contact">click for contact page</Link><br /><br />

    <button onClick={GoAbout}> about Page</button>
    <button onClick={GoContact}> contact  Page</button>
    </>
  )
}

export default Home
