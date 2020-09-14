import React from 'react'
import { menu } from "../data";
import MenuList from '../Components/MenuList';

export default function Menu() {
    // const appsTitle = menu.appetizers.title
    // const appsMenu = menu.appetizers.menu
    // const sideTitle = menu.sideDishes.title
    // const sideMenu = menu.sideDishes.menu
    return (
        <div className='container'>
            {/* <MenuList
                title={appsTitle}
                menu={appsMenu}
            />
            <MenuList
                title={sideTitle}
                menu={sideMenu}
            /> */}
            {menu.map(
                menuItem => <MenuList 
                                title={menuItem.menuSection.title} 
                                menu={menuItem.menuSection.menu}
                            />
            )}
        </div>
    )
}
