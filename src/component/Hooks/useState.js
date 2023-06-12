import React, { useState } from 'react'
import "./style.css"

function UseState() {
    const initialData = 10;
    const [num, setNum] = useState(initialData)
    console.log(num)

    return (
        <>
            <div className='center_div'>
                <p>{num}</p>
                <div className='button2' onClick={() => setNum(num + 1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>INCR
                </div>
                <div className="button2" onClick={() => setNum(num - 1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>DESCR
                </div>
            </div>
        </>
    )
}

export default UseState