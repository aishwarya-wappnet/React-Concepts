import React, { useEffect, useState } from 'react';
import useTitleCount from './useTitleCount';

// the useEffect will be executed after the rest of the code is executed. Like a side effect
// Thus the console.log in useEffect will be logged after ('Use outside')
const Test = () => {
    const [count, setCount] = useState(0);
    const changeCounter = () => {
        setCount(count+1);
    }
    // custom hook
    useTitleCount(count);

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
            <button className="button" onClick={ changeCounter }>Click Test</button>
        </div>  
    )
}

export default Test;