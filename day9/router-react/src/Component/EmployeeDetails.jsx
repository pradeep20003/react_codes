import React from 'react'
import { useParams } from 'react-router-dom'

function EmployeeDetails() {
    const {id1}= useParams();
  return (
   <>
    <h1>Employee id : {id1}</h1>
   </>
  )
}

export default EmployeeDetails
