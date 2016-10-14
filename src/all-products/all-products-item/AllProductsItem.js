import React from 'react'
import heartFull from './images/icon-heart-full.svg'
import heartAdd from './images/icon-heart-add.svg'

export default (props) => (
    <ul>
        <li> {props.productName} </li>
        <li> {props.price} </li>
        <li> {props.category} </li>
        {props.favorite ?
            <li><img src={heartFull}/></li> :
            <li><img src={heartAdd}/></li>}
    </ul>
)