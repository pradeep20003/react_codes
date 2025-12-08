// import React, { useState } from 'react';

// function ToDoList() {
//   const [activity, setActivity] = useState("");
//   const [listData, setListData] = useState([]);

//   function addActivity() {
//     if (activity.trim() === "") return;

//     setListData((prev) => [
//       ...prev,
//       { text: activity, completed: false }   // store as object
//     ]);
//     setActivity("");
//   }

//   function toggleComplete(index) {
//     setListData((prev) =>
//       prev.map((item, i) =>
//         i === index ? { ...item, completed: !item.completed } : item
//       )
//     );
//   }

//   function removeActivity(i) {
//     const updatedList = listData.filter((_, index) => index !== i);
//     setListData(updatedList);
//   }

//   function removeAll() {
//     setListData([]);
//   }

//   return (
//     <>
//       <h2>ToDo List</h2>

//       <input
//         type="text"
//         placeholder="Enter your task"
//         value={activity}
//         onChange={(e) => setActivity(e.target.value)}
//       />

//       <button onClick={addActivity}>Add Task</button>

//       <p>Your List:</p>

//       {listData.map((item, i) => (
//         <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          
//           {/* Toggle complete on click */}
//           <p
//             onClick={() => toggleComplete(i)}
//             style={{
//               cursor: "pointer",
//               textDecoration: item.completed ? "line-through" : "none"
//             }}
//           >
//             {item.text}
//           </p>

//           <button onClick={() => removeActivity(i)}>Remove</button>
//         </div>
//       ))}

//       {listData.length > 0 && (
//         <button onClick={removeAll}>Remove All</button>
//       )}
//     </>
//   );
// }

// export default ToDoList;





import React, { useState } from 'react'

function ToDoList() {
    const[activity,setActivity]= useState("");
    const[listData,setlistData]=useState([]);

    function addActivity(){
        setlistData((listData)=>{
          const updatedList =  [...listData , activity];
          setActivity("");// input field blanke
          return updatedList;
        })
    }

    function removeActivity(i){// i=1
         const updatedListData = listData.filter((ele,id)=>{
              return i!= id;  // 0!=0 1!=1
          })
          setlistData(updatedListData);
    }

    function removeAll(){
        setlistData([]);
    }

  return (
 <>
     <div>ToDo List </div>

     <input type="text" placeholder='Enter your task' value={activity} 
     onChange={(e)=> setActivity(e.target.value)}/>
     <button onClick={addActivity}>Add Task</button>

     <p>Your List :-</p>
     {listData != [] && listData.map((data,i)=>{
        return(
            <>
             <p key={i}></p>
             <p>{data}</p>
            <div>
                <button onClick={() => removeActivity(i)}>remove</button>
            </div>
            </>
        )
     })}

     {listData.length >= 1 && (
        <button onClick={removeAll}>RemoveAll</button>
     )}

 </>
  )
}

export default ToDoList
