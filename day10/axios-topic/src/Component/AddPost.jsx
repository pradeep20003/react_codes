import React, { useState } from 'react'
import axios from 'axios'

function AddPost() {
    const[title,setTitle]=useState("");
    const[body,setBody] = useState("");

    const handleSubmit = (e) =>{
      e.preventDefault();
// axios post methods will take 2 param -> links , data
      axios.post("https://jsonplaceholder.typicode.com/posts",{
        title,
        body,
        userId:11
      }).then((response)=> {
        console.log("post created",response.data);
        alert("post created sucessfully")
      }).catch((error)=>{
         console.log("Error adding post",error);
      })
    }
  return (
    <>
    <h2>Add New Post</h2>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Title' value={title}
        onChange={(e)=> setTitle(e.target.value)} /> <br />
         <input type="text" placeholder='Enter Body' value={body}
        onChange={(e)=> setBody(e.target.value)} /> <br />
        <button type='submit'>Add Post</button>
    </form>
    </>
  )
}

export default AddPost