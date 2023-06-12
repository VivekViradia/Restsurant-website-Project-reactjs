import React, { useState } from 'react'
import "./style.css"
import Menu from './menuApi.js'
import MenuCart from './MenuCart'

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu)

  return (
    <React.Fragment>
      <MenuCart menuData={menuData} />
    </React.Fragment>
  )
}

export default Resturant
