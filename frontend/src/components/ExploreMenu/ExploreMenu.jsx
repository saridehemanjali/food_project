import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Explore a world of flavors crafted to satisfy every craving! From zesty starters and cheesy sandwiches to refreshing salads and decadent desserts, our menu offers something special for everyone. Each dish is made with fresh, high-quality ingredients to bring you the perfect balance of taste and health. Whether you’re in the mood for something light, hearty, or indulgent, we’ve got you covered. Choose your favorite, customize it your way, and enjoy a meal that’s made just for you. Because great food begins with the right choice! 🍴💛</p>
        <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=""/>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
      
    </div>
  )
}

export default ExploreMenu
