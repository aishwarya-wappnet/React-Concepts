import React, { useState } from 'react';
import './index.css';

const Events = () => {
    const aliceBlue = '#f0f8ff';
    const [bg, setBg] = useState(aliceBlue);

    const [name, setName] = useState('Click Me');

    const bgChange = () => {
        let newBg = '#34495e';
        setBg(newBg);
        setName('Wow!');
    }

    const bgBack = () => {
        setBg(aliceBlue);
        setName('Click Me')
    }
    return (
        <>
        {/* inline css */}
        <div className="container" style = {{ backgroundColor: bg }}>
        <button onMouseEnter={bgChange} onMouseLeave={bgBack} className="button">{name}</button>
        </div>
        </>
    )
}

export default Events;