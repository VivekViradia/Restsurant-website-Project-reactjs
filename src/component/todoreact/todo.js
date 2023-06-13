import React, { useEffect, useState } from 'react'
import "./style.css"

// Get The LocalStorage Data back
const getLocalData = () => {
    const lists = localStorage.getItem("mytodolist")
    if (lists) {
        return JSON.parse(lists);
    } else {
        return []
    }
}

function Todo() {

    const [inputData, setInputData] = useState('')
    const [editItem, setEditItem] = useState('')
    const [toggelButton, setToggelButton] = useState(false)
    const [items, setItems] = useState(getLocalData())

    //Add the item functions
    const addItem = () => {
        if (!inputData) {
            alert('Plz fill the data📝')
        } else if (inputData && toggelButton) {
            setItems(
                items.map((curElem) => {
                    if (curElem.id === editItem) {
                        return { ...curElem, name: inputData }
                    }
                    return curElem
                })
            )
            setInputData([])
            setEditItem(null)
            setToggelButton(false)
        } else {
            const newInputData = {
                id: new Date().getTime().toString(),
                name: inputData
            }
            setItems([...items, newInputData])
            setInputData("")
        }
    }

    // Update the items
    const editItems = (index) => {
        const item_todo_edited = items.find((curElem) => {
            return curElem.id === index;
        })
        setInputData(item_todo_edited.name)
        setEditItem(index)
        setToggelButton(true)
    }

    // Delete item
    const deleteItem = (index) => {
        const updatedItem = items.filter((curElem) => {
            return curElem.id !== index;
        })
        setItems(updatedItem)
    }

    // adding localStorage
    useEffect(() => {
        localStorage.setItem("mytodolist", JSON.stringify(items));
    }, [items]);

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
                        {
                            toggelButton ? (<i className='fa fa-edit add-btn' onClick={addItem}></i>) : (<i className='fa fa-plus add-btn' onClick={addItem}></i>)
                        }
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
                                                <i className='far fa-edit add-btn' onClick={() => editItems(curElem.id)}></i>
                                                <i className='far fa-trash-alt add-btn' onClick={() => deleteItem(curElem.id)}></i>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button className='btn effect04' data-sm-link-text='Remove All' onClick={() => setItems([])}>
                            <span> CHECK LIST</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;
