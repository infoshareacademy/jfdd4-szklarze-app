import React from 'react'
import Filters from '../filters/Filters'
import './AllProducts.css'


import {
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

import AllProductsItem from './all-products-item/AllProductsItem'

import {
    increaseAmount,
    decreaseAmount,
    saveNewList
} from './actionCreators'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    categoryFilterArray: state.filters.categoryFilter,
    favoriteProductsIds: state.favorites.favoriteProductIds,
    productsToDisplay: state.filters.favoritesFilter ?
        state.products
            .filter(product =>
            state.favorites.favoriteProductIds.indexOf(product.productId) !== -1) :
        state.products,
    itemsToBuy: state.allProducts.itemsToBuy,

})

const mapDispatchToProps = (dispatch) => ({
    increaseAmount: (productId) => dispatch(increaseAmount(productId)),
    decreaseAmount: (productId) => dispatch(decreaseAmount(productId)),
    saveNewList: () => dispatch(saveNewList())
})

function generateProductItems(product, increaseAmount, decreaseAmount, itemsToBuy) {
    var currentCounterValue =
        itemsToBuy
            .filter(item => item.productId === product.productId).length > 0 ?
            itemsToBuy
                .map(item => (item.productId === product.productId ? item.quantity : null)) :
            0;
    return (
        <ListGroupItem key={product.productId}>
            <AllProductsItem
                increaseAmount={increaseAmount}
                decreaseAmount={decreaseAmount}
                currentCounterValue={currentCounterValue}
                itemsToBuy={itemsToBuy}
                product={product}/>
        </ListGroupItem>
    )
}

const AllProducts = ({
    categoryFilterArray,
    productsToDisplay,
    increaseAmount,
    decreaseAmount,
    itemsToBuy,
    saveNewList
}) => (
    <div className="background">
        <div className="all-products">
            <h2>Co chcesz kupić?</h2>
            <Filters />
            <ListGroup>
                {categoryFilterArray.indexOf('none') !== -1 ?
                    productsToDisplay
                        .map(product =>
                            generateProductItems(product, increaseAmount, decreaseAmount, itemsToBuy))
                    :
                    productsToDisplay
                        .filter(product =>
                            (categoryFilterArray.indexOf(product.category) !== -1))
                        .map(product =>
                            generateProductItems(product, increaseAmount, decreaseAmount, itemsToBuy))
                }
            </ListGroup>
            <div>
                <button
                    onClick={() => saveNewList()}>
                    Stwórz nową listę
                </button>
            </div>
        </div>
    </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
