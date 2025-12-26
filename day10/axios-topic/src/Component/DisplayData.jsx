import React from 'react'

function DisplayData({users}) {
  return (
    <>
     <ul>
        {
            users.map((user)=>(
                <li key={user.id} style={{border:"1px solid", margin:"10px"}}>
                    {user.name}: {user.email}
                    </li>                
            ))
        }
    </ul>
    </>
  )
}

export default DisplayData
