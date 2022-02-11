import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import Specials from '../screens/Specials';
import Contact from '../screens/Contact';

export default function Routes(props) {
    // console.log(props);
    return (
        
        
        <Switch>
            {/* Home Route */}
            <Route
                exact 
                path='/' 
                render={() => <Home handleHover={props.handleHover}/>}
            />
            {/* Menu Route */}
            <Route exact path='/menu' component={Menu}/>
            {/* Gallery Route */}
            <Route exact path='/gallery' component={Specials}/>
            {/* Contact Route */}
            <Route exact path='/contact' component={Contact}/>
        </Switch>
    )
}
