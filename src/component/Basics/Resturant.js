import React, { useState } from 'react'
import "./style.css"
import Menu from './menuApi.js'
import MenuCart from './MenuCart'

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu)

  return (
    <React.Fragment>
      <nav className='navbar'>
        <div className='btn-group'>
          <button className='btn-group__item '>Breakfast</button>
          <button className='btn-group__item '>Luncjh</button>
          <button className='btn-group__item '>Evening</button>
          <button className='btn-group__item '>Dinner</button>
          <button className='btn-group__item '>ALl</button>
        </div>
      </nav>
      <MenuCart menuData={menuData} />
    </React.Fragment>
  )
}

export default Resturant
