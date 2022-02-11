import React from 'react'

export default function MenuItem(props) {
    return (
        <div className='column'>
            <h1 className="title is-size-4">{props.name}</h1>
            <h2 className="title is-size-4">{props.price}</h2>
            <p className="subtitle is-size-6 is-size-5-desktop">{props.description}</p>
        </div>
    )
}
