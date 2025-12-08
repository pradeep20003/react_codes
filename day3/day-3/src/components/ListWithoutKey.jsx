import React from 'react'

function ListWithoutKey() {
   const lists = ["India","USA","PAKISTAN","SRI LANKA"]
    
   const listItems = lists.map((item)=> <li>{item}</li>)
  return (
    <>
    <h1>Countries List</h1>
    <ul>{listItems}</ul>
    </>
  )
}

export default ListWithoutKey