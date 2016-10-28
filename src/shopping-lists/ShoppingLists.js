import React from 'react'
import ProductsToBuy from '../products-to-buy/ProductsToBuy'
import ShoppingListsButtons from './shopping-lists-buttons/ShoppingListsButtons'
import {Grid,
        Col,
        Row
} from 'react-bootstrap'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    shoppingLists: state.listCreator.shoppingLists
})

class ShoppingLists extends React.Component {

    render() {
        var {
            shoppingLists,
            ...props
        } = this.props

        return (
            <div className="background-shopping-lists">
                <p className="intro-caption">
                    Wyświetl wybraną listę na telefonie i ruszaj do sklepu!
                </p>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={6}>
                            <div className="panel panel-default">
                                <div className="panel-heading">Listy zakupów:</div>
                                {shoppingLists.length > 0 ?
                                    <div className="panel-body"> </div> :
                                    <p className="intro">Nie stworzyłeś jeszcze listy zakupów</p>}

                                    <ShoppingListsButtons shoppingLists={shoppingLists}/>

                                </div>
                        </Col>

                        <Col xs={12} md={6}>
                            <div className="shopping-lists">
                                <ProductsToBuy{...props}/>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default connect(mapStateToProps)(ShoppingLists)
