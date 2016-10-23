import React from 'react'
import FavoriteMarker from '../../favorite-marker/FavoriteMarker'
import {
    Grid,
    Row,
    Col,
    Thumbnail,
    Button
} from 'react-bootstrap'
import './AllProductsItem.css'


let AllProductsItem = (props) =>(
    <Thumbnail
        src="/assets/thumbnaildiv.png"
        alt="242x200">
        <h3>{props.product.productName}</h3>
        <p>{props.product.price}
            zł</p>
        <p>{props.product.category}</p>
        <p>
            <button
                onClick={() => props.decreaseAmount(props.product.productId)}>
                -
            </button>
            <div>
                {props.currentCounterValue}
            </div>
            <button
                onClick={() => props.increaseAmount(props.product.productId)}>
                +
            </button>
        </p>
        <p className="favorite_marker">
            <FavoriteMarker
                productId={props.product.productId}/>
        </p>
    </Thumbnail>
)

export default AllProductsItem