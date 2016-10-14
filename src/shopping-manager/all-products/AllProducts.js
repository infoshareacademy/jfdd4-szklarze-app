import React from 'react';
import products from '../data/products';
import stylesheet from './AllProducts.css';
import {
    ListGroup,
    ListGroupItem
}
    from 'react-bootstrap';

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
                               <ul>
                                   <li> {product.productName} </li>
                                   <li> {product.price} </li>
                                    <li> {product.category} </li>
                                   {product.favorite ?
                                    <li> <img src={require('./images/icon-heart-full.svg')}/> </li> : null}
                                   </ul>
                            </ListGroupItem>
                        )
                    })}

                </ListGroup>
            </div>

        )
    }

}

