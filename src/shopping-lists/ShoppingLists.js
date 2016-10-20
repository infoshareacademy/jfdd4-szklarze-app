import React from 'react'
import ProductsToBuy from'../products-to-buy/ProductsToBuy'
import {Grid,
        Col,
        Row} from 'react-bootstrap'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    shoppingList: state.allProducts.shoppingLists
})


class ShoppingLists extends React.Component {

    render(){
        var {
            shoppingList
        } = this.props

        return(

            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={7}>
                        <div className="shopping-lists">
                            <h1>Shopping Lists</h1>
                            </div>
                    </Col>

                    <Col xs={6} md={5}>
                        <div className="shopping-lists">
                        <ProductsToBuy/>
                            </div>
                    </Col>
                </Row>
            </Grid>

        )
    }
}
export default connect(mapStateToProps)(ShoppingLists)
