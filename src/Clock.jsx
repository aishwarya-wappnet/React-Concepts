import React, { useState } from 'react';
import  './index.css'

const Clock = () => {
    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);
    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }
    // updateTime function will be called every second
    setInterval(updateTime, 1000);
    return(
        <>
        <div className="container">
        <h1>{time}</h1>
        </div>
        </>
    )
}

export default Clock;