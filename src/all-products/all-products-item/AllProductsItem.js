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
        className="product-item">
        <div className="product-item-caption">
            <h4>{props.product.productName}</h4>
        </div>
        <div className="product-item-price">
            <p>
                <span>Cena:</span><br/> {props.product.price}&nbsp;
                zł</p>
        </div>
        <div className="product-item-category">
            <p>
                Kategoria: {props.product.category}</p>
        </div>
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