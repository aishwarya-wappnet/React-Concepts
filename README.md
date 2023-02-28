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
 ## useEffect()
 
- The useEffect is used to perform side effects effects in your components. 
- Some examples of side effects are: fetching data, directly updating the DOM, and timers.
- useEffect accepts two arguments: function, an array (a dependency array). The second parameter is optional and should include all of the values that our side effects rely upon.
- Look at the Clock component in src/Clock
```
const Clock = () => {
const [currTime, setCurrTime] = useState(new Date().toLocalTimeString);

useEffect(() => {
    setTimeOut(() => {
    setCurrTime(new Date().toLocalTimeString);
    }, 1000)
});

return (
    <>
    { currTime }
    </>
)}
```
- useEffect runs on every render. So whenever the time changes, a render happens, which then triggers another effect. Also, there are several ways to control when side effect runs.
-  We should always include a second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.
- This array will check and see if a value has changed between renders. If so, it will execute our useEffect function again.
- If you do not provide the dependencies array at all and only provide a function to useEffect, it will run after every render and we will have an infinite loop.
- After the first render, useEffect will be run, state will be updated, which will cause a re-render, which will cause useEffect to run again, starting the process over again ad infinitum.
- This is called an infinite loop and this effectively breaks our application.
- If you are updating state within your useEffect, make sure to provide an empty dependencies array.
- If you do not provide an empty array which is recommended to provided by default for any time that you use useEffect, this will cause the effect function to run once after the component has rendered the first time.
- A common example for this is to fetch data.

## Cleanup function in useEffect()

- The final part of performing side effects properly in React is the effect cleanup function.
- The cleanup functions are required to reduce memory leaks.
- Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed/shut off.
- If we are setting state using setInterval and that side effect is not cleaned up, when our component unmounts and we're no longer using it, the state is destroyed with the component – but the setInterval function will keep running. Eg in src/UseEffect2.
```
useEffect(() => {

   let timer = setTimeout(() => {
   setCtime(new Date().toLocaleTimeString());
   }, 1000);
   return () => clearTimeout(timer);
   });
   
   return(
   <>
     <div>
      <h1>{ ctime }</h1>
     </div>
   </>
)
```
- The cleanup function will be called when the component is unmounted.
- A common example of a component being unmounted is going to a new page or a new route in our application where the component is no longer rendered.
- When a component is unmounted, our cleanup function runs, our interval is cleared, and we no longer get an error of attempting to update a state variable that doesn't exist.
- Finally, the side effect cleanup is not required in every case. It is only required in a few cases, such as when you need to stop a repeated side effect when your component unmounts.
 
 ## Custom hooks
 
- Hooks are reusable functions.
- When you have a component logic that needs to be used by multiple components, we can extract that logic to a custom hook.
- Custom Hooks start with "use". Example useTitleCount.
- We have created a new file called useTitleCount.js containing a function called useTitleCount which contains a useEffect hook displaying the updated document title on button click.
- In Test.js, we are importing the useTitleCount Hook and utilizing it like any other hook.

