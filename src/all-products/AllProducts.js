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
    favoriteProductsIds: state.favorites.favoriteProductIds,
    productsToDisplay:
        state.filters.favoritesFilter ?
            state.products
                .filter(product =>
                state.favorites.favoriteProductIds.indexOf(product.productId) !== -1) :
            state.products,

})

const mapDispatchToProps = (dispatch) => ({
    increaseAmount: (productId) => dispatch(increaseAmount(productId)),
    decreaseAmount: (productId) => dispatch(decreaseAmount(productId))
})

function generateProductItems(product, increaseAmount, decreaseAmount) {
    return (
        <ListGroupItem key={product.productId}>
            <AllProductsItem increaseAmount={increaseAmount}
                             decreaseAmount={decreaseAmount}
                             product={product}
                             counterValue={0}/>
        </ListGroupItem>
    )
}

const AllProducts = ({
    categoryFilterArray,
    productsToDisplay,
    increaseAmount,
    decreaseAmount
}) => (
            <div className="all-products">
                <h1>Wybór produktów</h1>
                <Filters />
                <ListGroup>
                    {categoryFilterArray.indexOf('none') !== -1 ?
                        productsToDisplay
                            .map( product =>
                                generateProductItems(product, increaseAmount, decreaseAmount))
                        :
                        productsToDisplay
                            .filter( product =>
                                (categoryFilterArray.indexOf(product.category) !== -1))
                            .map( product =>
                                generateProductItems(product, increaseAmount, decreaseAmount))
                    }
                </ListGroup>
                <div>
                    <button>
                        Stwórz nową listę
                    </button>
                </div>
            </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
