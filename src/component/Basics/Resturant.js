import React, { useState } from 'react'
import "./style.css"
import Menu from './menuApi.js'
import MenuCart from './MenuCart'
import NavBar from './NavBar'


const uniqueList = [...new Set(
  Menu.map((curElem) => {
    return curElem.category
  })
)
]
const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu)
  const [menuList, setMenuList] = useState(uniqueList)

  const filterItem = (category) => {
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList)
  }

  return (
    <React.Fragment>
      <NavBar filterItem={filterItem} menuList={menuList} />
      <MenuCart menuData={menuData} />
    </React.Fragment>
  )
}

export default Resturant
