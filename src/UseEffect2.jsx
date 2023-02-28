// CleanUp Function
import React, { useState, useEffect } from 'react';

const UseEffect = () => {

    const [widthCount, setWidthCount] = useState(window.screen.width);

    useEffect(() => {
        console.log('add event');
        window.addEventListener('resize', actualWidth);
        return () => {
            console.log('remove event');
            window.removeEventListener('resize', actualWidth);
        }
    })

    const actualWidth = () => {
        console.log(window.innerWidth);
        setWidthCount(window.innerWidth);
    }

    return (
        <div className='container'>
            <p>The actual size of the window is:</p>
            <h1>{ widthCount }</h1>
        </div>
    )
}

export default UseEffect;

