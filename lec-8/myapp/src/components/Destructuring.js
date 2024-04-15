import React from 'react'

const Destructuring = props => {
  return (
    // without Destructuring
    <div> 
        <div className="XYZ"> 
            <h3> {props.active} </h3> 
        </div> 
  
        <div className="PQR"> 
            <h1>{props.activeStatus}</h1> 
        </div> 
    </div> 

    // with Destructuring 
    // <div> 
    //     <div className="XYZ"> 
    //         <h3> {active} </h3> 
    //     </div> 
  
    //     <div className="PQR"> 
    //         <h1>{activeStatus}</h1> 
    //     </div>
    // </div>
  )
}

export default Destructuring