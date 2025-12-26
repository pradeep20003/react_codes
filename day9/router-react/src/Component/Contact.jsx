import React from 'react'
import { Link } from 'react-router-dom'
function Contact() {
  return (
    <div>
      <h2>contact</h2>
       <Link to ="/about">click for about page</Link><br />
        <Link to ="/">click for home page</Link>
    </div>
  )
}

export default Contact
