import React, { useState, useEffect } from 'react'
import "./style.css"

function UseEffect() {
    // const initialData = 10;
    const [num, setNum] = useState(0)

    useEffect(() => {
        document.title = `chats(${num})`
    })

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
            </div>
        </>
    )
}

export default UseEffect