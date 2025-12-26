import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DisplayData from './DisplayData';
function User() {

     const[users, setUsers] = useState([]);
      const[loading, setLoading]= useState(true);
    
      useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
          setUsers(res.data);
          setLoading(false)
        }).catch((error)=>{
          console.log("Error Fetching Data", error);
          setLoading(false);
        })
    },[])

    if(loading) return <p>loading...</p>
  return (
    <>
    <h1>User list</h1>
    {/* <ul>
        {
            users.map((user)=>(
                <li key={user.id} style={{border:"1px solid", margin:"10px"}}>
                    {user.name}: {user.email}
                    </li>                
            ))
        }
    </ul> */}
    <DisplayData users={users}/>
    </>
  )
}

export default User
