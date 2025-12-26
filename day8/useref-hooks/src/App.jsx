// Does NOT cause re-render when its value changes

// Is commonly used to access DOM elements directly

// Can also store values between renders

// syntax:- const myRef = useRef(initialValue);

// ❌ Difference: useRef vs useState
// Feature	         useRef	   useState
// Causes re-render	 ❌ No	  ✅ Yes
// Storesvalue	    ✅ Yes    	✅ Yes
// AccessDOM	      ✅ Yes	     ❌ No


import React, { useRef } from "react";

function InputFocus() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <>
      <div>
        <input type="text" ref={nameRef} placeholder="Name" />
        <button onClick={() => nameRef.current.focus()}>
          Focus Name
        </button>
      </div>

      <div>
        <input type="email" ref={emailRef} placeholder="Email" />
        <button onClick={() => emailRef.current.focus()}>
          Focus Email
        </button>
      </div>

      <div>
        <input type="password" ref={passwordRef} placeholder="Password" />
        <button onClick={() => passwordRef.current.focus()}>
          Focus Password
        </button>
      </div>
    </>
  );
}

export default InputFocus;







