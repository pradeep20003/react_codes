// import React, { useState } from 'react'

// const List_With_Key1 = () => {

//         const[items , setItems] =useState([10,20,30,40,50]);

//         const addItemAtBegin =()=>{
//             setItems([100 , ...items]);

//         }

//         const addItemAtEnd =()=>{
//             setItems([ ...items, 100]);
            
//         }

//   return (
//     <>
//      <h1>List with Key Example </h1>
//      <button onClick={addItemAtBegin}>Beggining</button>
//      <button onClick={addItemAtEnd}>End</button>

//      <ul>
//         {items.map((item ,index)=> (
//             <li key={index}>{item}</li>
//         ))}
//      </ul>
//     </>
//   )
// }

// export default List_With_Key1


import React, { useState } from 'react'

const List_With_Key1 = () => {

        const[items , setItems] =useState([10,20,30,40,50]);

        const addItemAtBegin =()=>{
            setItems((preItem) => [100, ...preItem]);

        }

          const addItemAtEnd =()=>{
            setItems((preItem) => [...preItem ,100]);
        }

        //    const removeEnd =()=>{
        //     setItems((preItem) => preItem.slice(0 ,-1));
        // }


           const removeEnd =()=>{
            setItems((preItem) => preItem.slice(1));
        }
          const removeAdd =()=>{
            setItems((preItem) => {
                const nayaArray =[...preItem];
                const index = nayaArray.indexOf(30);

                if(index !== -1){
                    nayaArray.splice(index,1,100);
                }
                return nayaArray;
            });
        }

        
        
  return (
    <>
     <h1>List with Key Example </h1>
     <button onClick={addItemAtBegin}>Beggining</button>
     <button onClick={addItemAtEnd}>End</button>
       <button onClick={removeEnd}>remove</button>
       <button onClick={removeAdd}>removeAdd</button>

     <ul>
        {items.map((item)=> (
            <li key={`item-${item}`}>{item}</li>
        ))}
     </ul>
    </>
  )
}

export default List_With_Key1