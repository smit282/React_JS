import React from 'react'

const Ternary = ({ a, b, c }) => {
    let f =" "; 
    
    if (a === b && b === c && a === c) { 
        f ="Matching" 
    } 
    else { 
        f = "Not Matching" 
    } 
    return (
        <>
            <h1 className='text-red-800'> {a} {b} {c} </h1> 
            <h1>{f}</h1> 
        </>
    )
}

export default Ternary