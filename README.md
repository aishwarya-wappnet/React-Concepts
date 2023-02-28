# Concepts

- Array destructuring and useState hook (counter) in src/State.jsx
- Refresh Time onClick using useState hook in src/Time.jsx
- Digital Clock in src/Clock.jsx
- Handling Events in react src/Events.jsx (Events like onClick, onDoubleClick, onMouseLeave, onMouseEnter)
- Form with complex multiple inputs, spread operator in src/Form.jsx  

# React Hooks

In functional components, hooks are everything.

A hook is a special function that lets you "hook into" React features.

- Hooks are the new features introduced in the React 16.8 version.
- It allows you to use state and other react features without writing a class. 
- Hooks are the functions which "hook into" React state and lifecycle from function components
- Hooks should always be used at the top level of the React functions.
- Node version  6 or above. NPM version 5.2 or above.
- It does not work inside class.

## useState()

The react useState hook allows us to track state in a function component. State generally refers to to data or properties that need to be tracking in an application. The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!

The useState() hook return an array containing two values. The initial state and the function. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.

```
// as useState returns a array containing two values, below we are destructuring the returned values from useState

const [name, setName] = useState('React') 
console.log(useState());

// the below line will be printed in the console'

(2) [undefined, ƒ]
0: undefined
1: ƒ ()
length: 2
[[Prototype]]: Array(0)

// you can access the first value of the useState as:

console.log(useState(name)[0]); // will print 'React' here
```

To change the name on button click, say we have a button. And the function 'changeName' is called on onClick
 ```
 const changeName = () => {
    setName('Vue');
 }
 ```
 To toggle between states on click, we can modify the above function 'changeName' as:
 ```
 const changeName = () => {
   let curName = name;
   curName === 'React' ? setName('Vue') : setName('React');
 }
 ```
 
 

