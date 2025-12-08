import React, {useRef} from 'react'

function Task1() {
  const refObject = useRef();
     const refObject1 = useRef();
     const refObject2 = useRef();
     const refObject3 = useRef();
 
     function handleSubmit(e){
         e.preventDefault();
        const val=  refObject.current.value;
          const val1 =refObject1.current.value ;
           const val2 =refObject2.current.value ;
            const val3 =refObject3.current.value ;
            
            if(!val || !val1 || !val2 || !val3){
                console.log("")
            }
           
            if(val2 ==val3){
                console.log("matched password")
            }
     }
   return (
   <>
     <form onSubmit={handleSubmit}>
         <label htmlFor="">FullName:-</label>
         <input type="text" ref={refObject} /><br />
 
         <label htmlFor="">Email :</label>
         <input type="email" ref={refObject1} /><br />

        <label htmlFor="">Password:-</label>
         <input type="password" ref={refObject2} /><br />

         <label htmlFor="">Confirm-Password:-</label>
         <input type="password" ref={refObject3} /><br />

         <button type='submit'>Submit</button>
     </form>
   </>
   )
}

export default Task1
