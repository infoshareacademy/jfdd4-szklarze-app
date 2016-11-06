import React from 'react'
import Filters from '../filters/Filters'
import ListCreator from '../list-creator/ListCreator'
import './AllProducts.css'
import {
    Grid,
    Row,
    Col,
    Button,
    Panel
} from 'react-bootstrap';

import AllProductsItem from './all-products-item/AllProductsItem'

import {
    increaseAmount,
    decreaseAmount
} from './actionCreators'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    categoryFilterArray: state.filters.categoryFilter,
    favoriteProductsIds: state.favorites.favoriteProductsIds,
    productsToDisplay: state.filters.favoritesFilter ?
        state.products
            .filter(product =>
            state.favorites.favoriteProductsIds.indexOf(product.productId) !== -1) :
        state.products,
    itemsToBuy: state.allProductsCounter.itemsToBuy,
    productPrices: state.pricesData.prices
})

const mapDispatchToProps = (dispatch) => ({
    increaseAmount: (productId, price) => dispatch(increaseAmount(productId, price)),
    decreaseAmount: (productId, price) => dispatch(decreaseAmount(productId, price)),
})

function generateProductItems(
    product,
    increaseAmount,
    decreaseAmount,
    itemsToBuy,
    productPrices) {

    var currentCounterValue =
        itemsToBuy
            .filter(item => item.productId === product.productId).length > 0 ?
            itemsToBuy
                .map(item =>
                    (item.productId === product.productId ?
                        item.quantity : null)) :
            0;

    return (
        <Col xs={6} md={3}
             key={product.productId}>
            <AllProductsItem
                increaseAmount={increaseAmount}
                decreaseAmount={decreaseAmount}
                currentCounterValue={currentCounterValue}
                itemsToBuy={itemsToBuy}
                product={product}
                productPrices={productPrices}
            />
        </Col>
    )
}

class AllProducts extends React.Component {

    constructor(...args) {
        super(...args);
        this.state = {
            open: false
        };
    }

    render() {

        const {
            categoryFilterArray,
            productsToDisplay,
            increaseAmount,
            decreaseAmount,
            itemsToBuy,
            productPrices
        } = this.props

        return (
            <div className="background">
                <div className="all-products">
                    <h1>Co chcesz kupić?</h1>
                    <Grid>
                        <div className="filters">
                            <Row>
                                <Col xs={12}>

                                    <Button
                                        onClick={ ()=> this.setState({ open: !this.state.open })}>
                                        Filtry produktów...
                                    </Button>
                                    <Panel collapsible expanded={this.state.open}>
                                        <Filters />
                                    </Panel>

                                </Col>
                            </Row>
                        </div>
                        <Row>
                            {categoryFilterArray.indexOf('none') !== -1 ?
                                productsToDisplay
                                    .map(product =>
                                        generateProductItems(
                                            product,
                                            increaseAmount,
                                            decreaseAmount,
                                            itemsToBuy,
                                            productPrices))
                                :
                                productsToDisplay
                                    .filter(product =>
                                        (categoryFilterArray.indexOf(product.category) !== -1))
                                    .map(product =>
                                        generateProductItems(
                                            product,
                                            increaseAmount,
                                            decreaseAmount,
                                            itemsToBuy,
                                            productPrices))
                            }
                        </Row>
                    </Grid>

                    <ListCreator />

                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
