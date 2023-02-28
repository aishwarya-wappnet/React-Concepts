import React, { useEffect, useState } from 'react';

// the useEffect will be executed after the rest of the code is executed. Like a side effect
// Thus the console.log in useEffect will be logged after ('Use outside')
const UseEffect = () => {
    const [count, setCount] = useState(0);
    const changeCounter = () => {
        setCount(count+1);
    }
    // This will run on every count change
    useEffect(() => {
        // console.log('Hello UseEffect');
        if(count > 0){
        document.title  = `Chats(${count})`;
        }
    }, [ count ]);

    // This will run only first time when the page is loaded
    useEffect(() => {
        // console.log('Hello UseEffect');
        console.log('I am fine');
    }, []);

    // The component will give the first priority to the below console.log
    console.log('Hello outside'); // this will be printed first and the rest which is in useEffect hook
    return(
        <div className='container'>
            <h1>Use Effect</h1>
            <p>{ count }</p>
            <button className="button" onClick={ changeCounter }>Click me</button>
        </div>  
    )
}

export default UseEffect;