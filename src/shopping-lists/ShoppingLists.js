import React from 'react'
import ProductsToBuy from '../products-to-buy/ProductsToBuy'
import ShoppingListsButtons from './shopping-lists-buttons/ShoppingListsButtons'
import {Grid,
        Col,
        Row
} from 'react-bootstrap'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    shoppingLists: state.allProducts.shoppingLists
})

class ShoppingLists extends React.Component {

    render(){
        var {
            shoppingLists
        } = this.props

        return(
            <div className="background-shopping-lists">
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={7}>
                            <div className="panel panel-default">

                                <div className="panel-heading">Listy zakupów:</div>
                                {shoppingLists.length > 0 ? ''
                                    : 'Nie stowrzyłeś jeszcze listy zakupów' }
                                <ShoppingListsButtons shoppingLists={shoppingLists}/>
                            </div>
                        </Col>

                        <Col xs={12} md={5}>
                            <div className="shopping-lists">
                                <ProductsToBuy{...this.props}/>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
    )
    }
}
export default connect(mapStateToProps)(ShoppingLists)
