import React from 'react'
import products from '../data/products'
import Filters from '../filters/Filters'
import './AllProducts.css'


import {
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

import AllProductsItem from './all-products-item/AllProductsItem'

import { increaseAmount, decreaseAmount, saveNewList } from './actionCreators'
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
    itemsToBuy: state.allProducts.itemsToBuy,
})

const mapDispatchToProps = (dispatch) => ({
    increaseAmount: (productId) => dispatch(increaseAmount(productId)),
    decreaseAmount: (productId) => dispatch(decreaseAmount(productId)),
    saveNewList: () => dispatch(saveNewList())
})

function generateProductItems(product, increaseAmount, decreaseAmount) {
    this.state.productsToDisplay.map(function (product) {
        var currentCounterValue = props.itemsToBuy.filter(item => item.productId === product.productId).length > 0 ?
            props.itemsToBuy.map(item => (item.productId === product.productId ?
                item.quantity : null)) :
            0;
    return (
        <ListGroupItem key={product.productId}>
            <AllProductsItem increaseAmount={increaseAmount}
                             decreaseAmount={decreaseAmount}
                             currentCounterValue={currentCounterValue}
                             itemsToBuy={props.itemsToBuy}/>
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
                    <button onClick={() => props.saveNewList()}>
                        Stwórz nową listę
                    </button>
                </div>
            </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)

    // class AllProducts extends React.Component {
    //     constructor() {
    //         super()
    //
    //         this.state = {
    //             productsToDisplay: []
    //         }
    //     }
    //
    //     componentWillMount() {
    //         this.setState({productsToDisplay: products})
    //     }
    //
    //
    //     render() {
    //         var props = this.props
    //         return (
    //             <div className="all-products">
    //                 <h1>Wybór produktów</h1>
    //                 <ListGroup>
    //                     {this.state.productsToDisplay.map(function (product) {
    //                         var currentCounterValue = props.itemsToBuy.filter(item => item.productId === product.productId).length > 0 ?
    //                             props.itemsToBuy.map(item => (item.productId === product.productId ?
    //                                 item.quantity : null)) :
    //                             0;
    //                         return (
    //                             <ListGroupItem key={product.productName}>
    //                                 <AllProductsItem increaseAmount={props.increaseAmount}
    //                                                  decreaseAmount={props.decreaseAmount}
    //                                                  product={product}
    //                                                  currentCounterValue={currentCounterValue}
    //                                                  itemsToBuy={props.itemsToBuy}
    //                                 />
    //                             </ListGroupItem>
    //                         )
    //                     })}
    //                 </ListGroup>
    //                 <div>
    //                     <button onClick={() => props.saveNewList()}>
    //                         Stwórz nową listę
    //                     </button>
    //                 </div>
    //             </div>
    //         )
    //     }
    //
    // }
