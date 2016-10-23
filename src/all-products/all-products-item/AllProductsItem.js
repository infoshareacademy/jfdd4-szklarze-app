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
        alt="242x200"
        className="product-item">
        <h4>{props.product.productName}</h4>
        <p>{props.product.price}
            zł</p>
        <p>{props.product.category}</p>
        <div className="add-button">
            <button
                onClick={() => props.decreaseAmount(props.product.productId)}>
                -
            </button>
            <span>
                &nbsp;&nbsp;{props.currentCounterValue}&nbsp;&nbsp;
            </span>
            <button
                onClick={() => props.increaseAmount(props.product.productId)}>
                +
            </button>
        </div>
        <p className="favorite_marker">
            <FavoriteMarker
                productId={props.product.productId}/>
        </p>
    </Thumbnail>
)

export default AllProductsItem