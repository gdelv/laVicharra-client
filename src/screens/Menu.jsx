import React from 'react'
import { menu } from "../data";
import { Link } from 'react-scroll'
import MenuList from '../Components/MenuList';

export default function Menu() {
    // const appsTitle = menu.appetizers.title
    // const appsMenu = menu.appetizers.menu
    // const sideTitle = menu.sideDishes.title
    // const sideMenu = menu.sideDishes.menu
    // let options = {
    //     root: document.querySelector('#scrollArea'),
    //     rootMargin: '0px',
    //     threshold: 1.0
    //   }
      
    //   let observer = new IntersectionObserver(callback, options);
    //   let target = document.querySelector('#Cold Appetizers - Entradas Frias');
    //   observer.observe(target);
      
    return (
        <>
            <div className='sticky-filter-bar'>
                {menu.map(e => 
                    <Link 
                        activeClass="active" 
                        to={`${e.menuSection.title}`} 
                        spy={true} 
                        smooth={true} 
                        offset={-190} 
                        duration={500} 
                    >
                    {e.menuSection.title}
                </Link>
                    // <a href={`#${e.menuSection.title}`}>{e.menuSection.title}</a>
                )}
                {}
            </div>
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
                    (item,i) => <MenuList 
                                    key={i}
                                    title={item.menuSection.title} 
                                    menu={item.menuSection.menu}
                                />
                )}
            </div>
        </>
    )
}
