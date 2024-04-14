import React from 'react'
import './App.css';

function Propscard(props) {
    return (
        <div>
            <div className='card border text-center w-[20rem] rounded-lg overflow-hidden my-2'>
                <div className='card-header flex justify-center items-center bg-blue-500 py-7'>
                    <div className='card-img'>
                        <img src={props.image} alt='' className='h-32 rounded-full border-2 p-1'></img>
                    </div>
                </div>
                <div className='card-body px-5 pt-3'>
                    <h1 className='text-lg font-semibold '>{props.name}</h1>
                    <p className='text-xl text-blue-500 font-medium'>{props.coures}</p>
                    <p className='my-2 text-gray-500 font-semibold'>{props.discription}</p>
                    <button className='bg-blue-500 text-white my-5 px-10 py-2 rounded-md text-lg'>{props.button}</button>
                </div>
            </div>
        </div>
    )
}

export default Propscard