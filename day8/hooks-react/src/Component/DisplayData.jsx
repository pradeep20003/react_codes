import React, { useEffect, useState } from 'react'

function DisplayData() {
    const [posts, setPosts] =useState([]);

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json())
        .then((data1)=> setPosts(data1.slice(0,10)));
    },[])
  return (
    <>
    <h2>user Post</h2>
    {posts.map((post)=>(
        <div key={post.id} style={{border: "1px solid", margin :"10px" ,padding:"10px"}}>
            <h3>{post.title}</h3>
            <h4>{post.body}</h4>
        </div>
   ) )}
    </>
  )
}

export default DisplayData
