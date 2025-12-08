In React, a “stateless component” is a component that does not manage its own internal state. Instead, it simply receives data via props and returns UI (JSX) based on those props. 

These components are often written as functions (function components), rather than classes. 

Because they don’t hold state or deal with lifecycle methods, stateless components are simpler, easier to reason about, maintain and test. 
Ultimate Courses

📄 Example of a Stateless Component
// A simple React stateless (functional) component
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
// <Greeting name="Alice" />