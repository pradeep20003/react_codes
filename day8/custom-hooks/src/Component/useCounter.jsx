import React from 'react'
import { useState } from 'react'

    function useCounter(initialValue=0){
        const[count, setCounter] = useState(initialValue);

        function Increment(){
            setCounter(count+1)
        }
         function Decrement(){
            setCounter(count-1)
        }
         function reset(){
            setCounter(initialValue)
         }
        return [count, Increment, Decrement,reset]
        }
        export default useCounter
