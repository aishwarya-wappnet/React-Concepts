import React, { useState } from 'react';

const Time = () => {
let t = new Date().toLocaleTimeString();
let [time, setTime] = useState(t);
const updateTime = () =>{
    t = new Date().toLocaleTimeString();
    setTime(t);
}
return (
    <>
    <div className='container'>
        <h1>{ time }</h1>
        <button className="button" onClick={updateTime}>Get Time</button>
    </div>
    </>
)
}

export default Time;