import React, { useState } from 'react'
import "./counter.css"

const Counter = () => {
    const [counterVal, setCounterVal] = useState(0);

    const incCounter = () => {
        setCounterVal(prev => prev + 1)
    }

    const decCounter = () => {
        setCounterVal(prev => prev - 1)
    }

    return (
        <>
            <h1>React Counter</h1>
            <button className='counter-btn' onClick={decCounter}>-</button>
            <span className='counter-value'>{counterVal}</span>
            <button className='counter-btn' onClick={incCounter}>+</button>
        </>
    )
}

export default Counter