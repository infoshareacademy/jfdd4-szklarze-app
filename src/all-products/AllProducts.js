import React from 'react';
import products from '../data/products';
import stylesheet from './AllProducts.css';
import {
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';
import ProductItem from './all-products-item/AllProductsItem'

export default class AllProducts extends React.Component {
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
        return (
            <div>
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
            </div>

        )
    }

}

