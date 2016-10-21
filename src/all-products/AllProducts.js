import React from 'react'
import products from '../data/products'
import {Jumbotron} from 'react-bootstrap'
import './AllProducts.css'

import {
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

import AllProductsItem from './all-products-item/AllProductsItem'

import {increaseAmount, decreaseAmount, saveNewList} from './actionCreators'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    itemsToBuy: state.allProducts.itemsToBuy,
})

const mapDispatchToProps = (dispatch) => ({
    increaseAmount: (productId) => dispatch(increaseAmount(productId)),
    decreaseAmount: (productId) => dispatch(decreaseAmount(productId)),
    saveNewList: () => dispatch(saveNewList())
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
            <Jumbotron>
                <div className="all-products">
                    <h2>Co chcesz kupić?</h2>
                    <ListGroup>
                        {this.state.productsToDisplay.map(function (product) {
                            var currentCounterValue = props.itemsToBuy.filter(item => item.productId === product.productId).length > 0 ?
                                props.itemsToBuy.map(item => (item.productId === product.productId ?
                                    item.quantity : null)) :
                                0;
                            return (
                                <ListGroupItem key={product.productName}>
                                    <AllProductsItem increaseAmount={props.increaseAmount}
                                                     decreaseAmount={props.decreaseAmount}
                                                     product={product}
                                                     currentCounterValue={currentCounterValue}
                                                     itemsToBuy={props.itemsToBuy}
                                    />
                                </ListGroupItem>
                            )
                        })}
                    </ListGroup>
                    <div>
                        <button onClick={() => props.saveNewList()}>
                            Stwórz nową listę
                        </button>
                    </div>
                </div>
            </Jumbotron>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
