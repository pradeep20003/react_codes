// import React from 'react'
// import { DataContext } from './App'

// function Child1() {
//   return (
//    <>
//    <DataContext.Consumer>
//     {
//         function name1(a){
//             return(
//                 <>
//                 <h1>my institute name is {a}</h1>
//                 </>
//             )
//         }
//     }
//    </DataContext.Consumer>
//    </>
//   )
// }

// export default Child1

import React from 'react'
import { DataContext } from './App'
import { useContext } from 'react'

function Child1() {
    const name = useContext(DataContext)
  return (
    <>
    <h1>my institute name is {name}</h1>
    </>
  )
}

export default Child1

