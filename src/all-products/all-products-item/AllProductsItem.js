import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Counter from './product-counter/ProductCounter'
import FavoriteMarker from '../../favorite-marker/FavoriteMarker'



export default (props) => (
    <Row>
        <div>
            <Col md={8}>
                <ul>
                    <li> {props.productName} </li>
                    <li> {props.price} </li>
                    <li> {props.category} </li>
                </ul>
            </Col>
            <Col md={4}>
                <div>
                    <Counter />
                </div>
                <div>
                    <FavoriteMarker {props.product.productId} />
                </div>
            </Col>

        </div>
    </Row>
)