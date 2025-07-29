import React from 'react'

const Heading = (props) => {
    return (

        <div className='mx-auto w-fit'>
            <h2 className='text-zinc-800 text-5xl font-bold'> <span className='text-orange-500'> {props.highlight} </span>{props.Heading}</h2>
            <div className='w-25 h-1 text bg-orange-300 mt-6 ml-auto'></div>
        </div>

    )
}

export default Heading
