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
                    <li> {props.price} zł</li>
                    <li> {props.category} </li>
                </ul>
            </Col>
            <Col md={2}>
                <div>
                    <Counter />
                </div>
            </Col>
            <Col md={2}>
                <div className="favorite_marker">
                    <FavoriteMarker productId={props.productId} />
                </div>
            </Col>

        </div>
    </Row>
)