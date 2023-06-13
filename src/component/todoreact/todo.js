import React, { useEffect, useState } from 'react'
import "./style.css"

function Todo() {

    const [inputData, setInputData] = useState('')
    const [items, setItems] = useState([])
    //ADd the item funstions
    const addItem = () => {
        if (!inputData) {
            alert('Plz fill the data📝')
        } else {
            const newInputData = {
                id: new Date().getTime().toString(),
                name: inputData
            }
            setItems([...items, newInputData])
            setInputData("")
        }
    }

    // Delete item
    const deleteItem = (index) => {
        const updatedItem = items.filter((curElem) => {
            return curElem.id !== index;
        })
        setItems(updatedItem)
    }

    useEffect(() => [
        localStorage.setItem("mytodolist", JSON.stringify(items))
    ], [items])

    return (
        <>
            <div className="main-div">
                <div className='child-div'>
                    <figure>
                        <img src='./images/todo.svg' alt='Todo Logo' />
                        <figcaption>Add Your List Here👌</figcaption>
                    </figure>
                    <div className='addItems'>
                        <input type='text' className='form-control' placeholder=" Add Item✍" value={inputData} onChange={(event) => setInputData(event.target.value)} />
                        <i className='fa fa-plus add-btn' onClick={addItem}></i>
                    </div>
                    <div className='showItems'>
                        {/* show our items */}
                        <div className='showItems'>
                            {
                                items.map((curElem) => {
                                    return (
                                        <div className='eachItem' key={curElem.id}>
                                            <h3>{curElem.name}</h3>
                                            <div className='todo-btn'>
                                                <i className='far fa-edit add-btn' ></i>
                                                <i className='far fa-trash-alt add-btn' onClick={() => deleteItem(curElem.id)}></i>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button className='btn effect04' data-sm-link-text='Remove All' onClick={setItems([])}>
                            <span> CHECK LIST</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;
