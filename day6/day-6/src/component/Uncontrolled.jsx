import React,{useRef} from 'react'

function Uncontrolled() {

    const refObject = useRef();
    const refObject1 = useRef();

    function handleSubmit(e){
        e.preventDefault();
        console.log((refObject.current.value).toUpperCase());
        console.log((refObject1.current.value).toLowerCase());
    }
  return (
  <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="">Firstname:-</label>
        <input type="text" ref={refObject} /><br />

        <label htmlFor="">LastName :</label>
        <input type="text" ref={refObject1} /><br />
        <button type='submit'>Submit</button>
    </form>
  </>
  )
}

export default Uncontrolled
