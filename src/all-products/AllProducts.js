import React from 'react'
import products from '../data/products'
import {
    ListGroup,
    ListGroupItem
}
    from 'react-bootstrap'

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
                                {product.productName}
                            </ListGroupItem>
                        )
                    })}

                </ListGroup>
            </div>

        )
    }

}

