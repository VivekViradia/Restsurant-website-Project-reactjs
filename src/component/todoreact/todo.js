import React from 'react'
import "./style.css"

function Todo() {
    return (
        <>
            <div className="main-div">
                <div className='child-dev'>
                    <figure>
                        <img src='./imsges/todo.svg' alt='Todo Logo' />
                        <figurecaption>Add Your List Here👌</figurecaption>
                    </figure>
                    <div className='addItems'>
                        <input type='text' className='form-control' placeholder="✍ Add Item" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;

