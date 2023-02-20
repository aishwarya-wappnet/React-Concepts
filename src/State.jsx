import React, { useState } from 'react';

// array destructuring
const mylangs = ['js', 'c', 'python', 'java', 'c++']; 

let  [v, w, x, y, z] = mylangs;
console.log(v, w, x, y, z);

let [b, , , ,a] = mylangs; 
console.log(b, a);

let p, q;
[p, q] = mylangs;
console.log(p, q);

// array destructuring

const State = () => {
    let [count, setCount] = useState(0);

const IncNum = () => {
    console.log('clicked'+ count++);
    setCount(count+1);
}

// console.log(state); // gives array [undefined, f]

    return(
        <>
        <div className="container">
        <h1>{count}</h1>
        <button className="button" onClick={IncNum}>Click Me</button>
        </div>
        </>
    )
}

export default State;