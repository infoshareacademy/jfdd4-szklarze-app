import React from 'react'
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
    categoryFilterArray: state.filters.categoryFilter,
    productsToDisplay:
        state.filters.favoritesFilter ?
            state.products
                .filter(product =>
                localStorage.favorites.indexOf(product.productId) !== -1) :
            state.products
})

const mapDispatchToProps = (dispatch) => ({
    increaseAmount: (productId) => dispatch(increaseAmount(productId)),
    decreaseAmount: (productId) => dispatch(decreaseAmount(productId))
})

const AllProducts = ({
    categoryFilterArray,
    productsToDisplay,
    increaseAmount,
    decreaseAmount
}) => (
            <div className="all-products">
                <h1>Wybór produktów</h1>
                <Filters />
                {console.log (
                    categoryFilterArray,
                    productsToDisplay)}
                <ListGroup>
                    {productsToDisplay.map(function (product) {
                        return (
                            <ListGroupItem key={product.productName}>
                                <AllProductsItem increaseAmount={increaseAmount}
                                                 decreaseAmount={decreaseAmount}
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

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
