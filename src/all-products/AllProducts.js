import React from 'react'
import products from '../data/products'
import stylesheet from './AllProducts.css'


import {
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';
import ProductItem from './all-products-item/AllProductsItem'

export default class AllProducts extends React.Component {
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
        return (
            <div className="all-products">
                <h1>Wybór produktów</h1>
                <ListGroup>
                    {this.state.productsToDisplay.map(function (product) {
                        return (
                            <ListGroupItem key={product.productName}>
                                <ProductItem {...product}/>
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

