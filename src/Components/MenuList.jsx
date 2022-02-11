import React from 'react'
import MenuItem from './MenuItem'

export default function MenuList(props) {
    return (
        <div className='container' id={`${props.title}`}>
            <h1 className="title has-text-centered is-size-3 is-size-2-desktop">{props.title}</h1>
            <div className="columns">
                {props.menu.map((item, i) => <MenuItem 
                                            key={i}
                                            name={item.name} 
                                            price={item.price} 
                                            description={item.description}
                                        />
                )}
            </div>
        </div>
    )
}
