import React from 'react'


const NavBar = ({ filterItem, menuList }) => {

    return (
        <React.Fragment>
            <nav className='navbar'>
                <div className='btn-group'>
                    {
                        menuList.map((curElem) => {
                            return (

                                <button className='btn-group__item' onClick={() => filterItem(curElem)}>Breakfast</button>
                            )
                        })
                    }

                </div>
            </nav>
        </React.Fragment>
    )
}

export default NavBar