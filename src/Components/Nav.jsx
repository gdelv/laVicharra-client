import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaYelp } from "react-icons/fa";
const logo = require('../images/logo.jpg')

export default function Nav() {
    return (
        <nav className='flex justify-content'>
            <div className="logo">
                <a href='/'>
                <img src={logo} alt='logo' className='logo-image' />
            </a>
            </div>
            <div className="links">
            <NavLink 
            exact 
            to='/'
            activeClassName='active' 
            >
                Home
            </NavLink>
            <NavLink 
            exact 
            to='/menu'
            activeClassName='active' 
            >
                Menu
            </NavLink>
            <NavLink 
            exact 
            to='/contact'
            activeClassName='active' 
            >
                Contact
            </NavLink>
            <a 
                href='https://www.facebook.com/lavicharra' 
                target='_blank'
                rel="noopener noreferrer">
                <FaFacebookF/>
            </a>
            <a 
                href='https://www.yelp.com/biz/la-vicharra-glen-cove'
                target='_blank'
                rel="noopener noreferrer">
                <FaYelp/>
            </a>
            </div>
            
            
        </nav>
    )
}
