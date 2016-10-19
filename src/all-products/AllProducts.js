import React from 'react'
import products from '../data/products/products'
import Filters from '../filters/Filters'
import './AllProducts.css'

import {
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

import AllProductsItem from './all-products-item/AllProductsItem'

import { increaseAmount, decreaseAmount } from './actionCreators'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    increaseAmount: (productId) => dispatch(increaseAmount(productId)),
    decreaseAmount: (productId) => dispatch(decreaseAmount(productId))
})

class AllProducts extends React.Component {
    constructor() {
        super()

        this.state = {
            productsToDisplay: [],
            shoppingList: []
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
                <Filters />
                <ListGroup>
                    {this.state.productsToDisplay.map(function (product) {
                        return (
                            <ListGroupItem key={product.productName}>
                                <AllProductsItem increaseAmount={props.increaseAmount}
                                                 decreaseAmount={props.decreaseAmount}
                                                 product={product}
                                                 counterValue={0}/>
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
