import React, { useState } from 'react';

const Form = () => { 
    const [fullName, setFullName] = useState({
        fName: '',
        lName: '',
        email: '',
        phone:'',
        qual: ''
    });
    // const [fullName, setFullName] = useState();
    // const [lastName, setLastName] = useState();
    // const [lastNamenew, setLastNamenew] = useState();
    const onSubmit = (event) => {
        event.preventDefault();
        alert('done')
        // setFullName(name);
        // setLastNamenew(lastName)
    }
    // Spread Operator
    let array = ['call of duty', 'far cry', 'resident evil'];
    let [first, ...remaining] = array;

    console.log(first);
    console.log(remaining);

    const inputEvent = (event) => {
        //  console.log(event);
        //  console.log(event.target.name);
        //  console.log(event.target.placeholder);
        const {value, name} = event.target;

        setFullName((preValue) => {
            console.log(preValue);
            // if(name === 'fName') {
            //     return{
            //         // fName: value,
            //         // lName: preValue.lName,
            //         // email: preValue.email,
            //         // phone: preValue.phone
            //         ...preValue,
            //         fName: value,
            //     };
            // }
            // }else if(name === 'lName'){
            //     return{
            //         fName: preValue.fName,
            //         lName: value,
            //         email: preValue.email,
            //         phone: preValue.phone
            //     };
            // }else if(name === 'email'){
            //     return{
            //         fName: preValue.fName,
            //         lName: preValue.lName,
            //         email: value,
            //         phone: preValue.phone
            //     };
            // }
            // else{
            //     return{
            //         fName: preValue.fName,
            //         lName: preValue.lName,
            //         email: preValue.email,
            //         phone: value
            //     };
            // }
// THE ABOVE CODE CAN BE WRITTEN IN SHORT AS FOLLOWS:
             return{
                ...preValue,
                [name]: value // this will update the 'name' given here in the preValue object if it matches. Or else it will create new property with the given name
             };
        })
    }
    // const inputEvent2 = (event) => {
    //     setLastName(event.target.value);
    // }
    return (
        <>
        <div className="container">
            <form onSubmit = {onSubmit}>
            <h1>Hello {fullName.fName}{fullName.lName}</h1>
            <p>{fullName.email}</p>
            <p>{fullName.phone}</p>
            <p>{fullName.qual}</p>
            <input type='text' placeholder='Enter your name' name='fName' onChange={inputEvent} value= {fullName.fName}/>
            <input type='text' placeholder='Enter your last name' name='lName' onChange={inputEvent} value= {fullName.lName}/>
            <input type="text" placeholder='Enter your email' name='email'onChange={inputEvent} autoComplete='off' value={fullName.email}/>
            <input type="text" placeholder='Enter your phone number' name='phone' onChange={inputEvent} value={fullName.phone}/>
            <input type="text" placeholder='Enter your qualification' name='qual' onChange={inputEvent} value={fullName.qual}/>
            <button className="button" type="submit" >Click Me</button>
            </form> 
        </div>
        </>
    );
}

export default Form;