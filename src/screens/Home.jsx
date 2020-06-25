import React from 'react'
import { NavLink } from "react-router-dom";
import { backgroundOne, backgroundTwo, backgroundThree, defaultCase } from "../actions";
import { useDispatch } from "react-redux";

export default function Home() {
    const dispatch = useDispatch();
        return (
            <div className='home-links'>
                <NavLink
                    onMouseEnter={ () => dispatch(backgroundOne()) }
                    onMouseLeave={ () => dispatch(defaultCase()) }
                    exact 
                    to='/menu'
                    activeClassName='active'>
                    
                        Menu
                </NavLink>
                <NavLink
                    onMouseEnter={ () => dispatch(backgroundTwo()) }
                    onMouseLeave={ () => dispatch(defaultCase()) }
                    exact 
                    to='/specials'
                    activeClassName='active'>
                        Specials
                </NavLink>
                <NavLink
                    onMouseEnter={ () => dispatch(backgroundThree()) }
                    onMouseLeave={ () => dispatch(defaultCase()) }
                    exact 
                    to='/contact'
                    activeClassName='active'>
                        Visit
                </NavLink>
            </div>
        )
}
