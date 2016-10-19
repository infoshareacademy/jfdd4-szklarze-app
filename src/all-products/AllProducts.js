import React from 'react'
import products from '../data/products'
import stylesheet from './AllProducts.css'

import {
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

import AllProductsItem from './all-products-item/AllProductsItem'

import { increaseAmount, decreaseAmount } from './actionCreators'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
        return { itemsToBuy: state.itemsToBuy }
}

const mapDispatchToProps = (dispatch) => ({
    increaseAmount: (productId) => dispatch(increaseAmount(productId)),
    decreaseAmount: (productId) => dispatch(decreaseAmount(productId))
})

class AllProducts extends React.Component {
    constructor() {
        super()

        this.state = {
            productsToDisplay: []
        }
    }

    componentWillMount() {
        this.setState({productsToDisplay: products})
    }


    render() {
        var props = this.props
        return (
            <div className="all-products">
                <h1>Wybór produktów</h1>
                <ListGroup>
                    {this.state.productsToDisplay.map(function (product) {
                        return (
                            <ListGroupItem key={product.productName}>
                                <AllProductsItem increaseAmount={props.increaseAmount}
                                                 decreaseAmount={props.decreaseAmount}
                                                 product={product}
                                                 counterValue={props.itemsToBuy.map(function (item) {
                                                    if (props.itemsToBuy.productId === product.productId){
                                                        return this.props.itemsToBuy.quantity
                                                    }
                                                 })}/>
                            </ListGroupItem>
                        )
                    })}
                </ListGroup>
                <div>
                    <button>
                        Stwórz nową listę
                    </button>
                </div>
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
