import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Counter from './product-counter/ProductCounter'

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
            </Col>

        </div>
    </Row>
)