import React from 'react'
import {Row, Col} from 'react-bootstrap'
import ProductCounter from './product-counter/ProductCounter'
import FavoriteMarker from '../../favorite-marker/FavoriteMarker'
import { increaseAmount, decreaseAmount } from './actionCreators'

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => ({
    increaseAmount: (newAmount) => dispatch(increaseAmount(newAmount)),
    decreaseAmount: (newAmount) => dispatch(decreaseAmount(newAmount))
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
                    <button onClick={this.state.counter !== 0 ?
                        this.decrementCounter : null
                    }>
                        -
                    </button>
                    <span>  {this.state.counter}  </span>
                    <button onClick={this.incrementCounter}>
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