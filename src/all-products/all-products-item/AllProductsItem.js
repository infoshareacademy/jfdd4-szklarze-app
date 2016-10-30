import React from 'react'
import FavoriteMarker from '../../favorite-marker/FavoriteMarker'
import {
    Thumbnail
} from 'react-bootstrap'
import './AllProductsItem.css'

let AllProductsItem = (props) =>(
    <Thumbnail
        src={`${process.env.PUBLIC_URL}` + `${props.product.imageUrl}`}
        alt="242x200"
        className="product-item">
        <div className="product-item-caption">
          <h6>{props.product.productName}</h6>
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
        <div className="product-item-all-buttons">
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
            <FavoriteMarker
                productId={props.product.productId}/>
        </div>
    </Thumbnail>
)

export default AllProductsItem