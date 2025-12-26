// A Custom Hook is a reusable JavaScript function that:
// Uses React Hooks (useState, useEffect, useRef, etc.)
// Starts with the word use
// Helps reuse logic, not UI

// ✅ Why Custom Hooks?

// ✔ Avoid code duplication
// ✔ Clean & readable components
// ✔ Easy testing & maintenance
// ✔ Real-world project friendly


// 2️⃣ Can custom hooks return JSX?
// ❌ No
// ✔ They return logic / data.

// 3️⃣ Can we use hooks inside custom hooks?
// ✔ Yes (that’s the purpose)

// 4️⃣ When to create a custom hook?
// ✔ Logic repeated in 2+ components.


import React from 'react'
import CounterOne from './Component/CounterOne'
import CounterTwo from './Component/CounterTwo'

function App() {
  return (
   <>
   <CounterOne/>
   <CounterTwo/>
   </>
  )
}

export default App

