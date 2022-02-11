import React from 'react'
import { NavLink } from "react-router-dom";
import { backgroundTwo, backgroundThree, defaultCase } from "../actions";
import { useDispatch } from "react-redux";

export default function Home() {
    const dispatch = useDispatch();
        return (
            <div className='home-links'>
                {/* <NavLink
                    onMouseEnter={ () => dispatch(backgroundOne()) }
                    onMouseLeave={ () => dispatch(defaultCase()) }
                    onClick={ () => dispatch(defaultCase())}
                    exact 
                    to='/gallery'
                    activeClassName='active'>
                        Gallery
                </NavLink> */}
                <NavLink
                    onMouseEnter={ () => dispatch(backgroundTwo()) }
                    onMouseLeave={ () => dispatch(defaultCase()) }
                    onClick={ () => dispatch(defaultCase())}
                    exact 
                    to='/menu'
                    activeClassName='active'>
                        Menu
                </NavLink>
                <NavLink
                    onMouseEnter={ () => dispatch(backgroundThree()) }
                    onMouseLeave={ () => dispatch(defaultCase()) }
                    onClick={ () => dispatch(defaultCase())}
                    exact 
                    to='/contact'
                    activeClassName='active'>
                        Contact
                </NavLink>
            </div>
        )
}
