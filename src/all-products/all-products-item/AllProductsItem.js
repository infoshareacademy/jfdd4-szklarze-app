import React from 'react'
import {Row, Col} from 'react-bootstrap'
import FavoriteMarker from '../../favorite-marker/FavoriteMarker'
import { increaseAmount, decreaseAmount } from './actionCreators'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    increaseAmount: (productId) => dispatch(increaseAmount(productId)),
    decreaseAmount: (productId) => dispatch(decreaseAmount(productId))
})


let AllProductsItem = (props) => (
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
                    <button onClick={() => props.increaseAmount(props.productId)}>
                        -
                    </button>
                    <span>  {0}  </span>
                    <button onClick={() => props.decreaseAmount(props.productId)}>
                        +
                    </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AllProductsItem)