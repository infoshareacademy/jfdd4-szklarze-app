import React from 'react'
import {Row, Col} from 'react-bootstrap'
import FavoriteMarker from '../../favorite-marker/FavoriteMarker'
import './AllProductsItem.css'


let AllProductsItem = (props) =>(
    <Row>
        <div className="product-item">
            <Col md={8}>
                <ul>
                    <li> {props.product.productName} </li>
                    <li> {props.product.price} zł</li>
                    <li> {props.product.category} </li>
                </ul>
            </Col>
            <Col md={2}>
                <div>
                    <button onClick={() => props.decreaseAmount(props.product.productId)}>
                        -
                    </button>
                    <div>
                        {props.currentCounterValue}
                    </div>
                    <button onClick={() => props.increaseAmount(props.product.productId)}>
                        +
                    </button>
                </div>
            </Col>
            <Col md={2}>
                <div className="favorite_marker">
                    <FavoriteMarker productId={props.product.productId}/>
                </div>
            </Col>

        </div>
    </Row>
)

export default AllProductsItem