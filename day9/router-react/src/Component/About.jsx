import React from 'react'
import { Link, useLocation } from 'react-router-dom'
function About() {

  const location = useLocation();
  console.log(location.state)

  return (
    <div>
      <h4>about</h4>
        <Link to ="/contact">click for contact page</Link><br />
         <Link to ="/">click for home page</Link> 
    </div>
  )
}

export default About
