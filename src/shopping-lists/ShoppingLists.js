import React from 'react'
import ProductsToBuy from'../products-to-buy/ProductsToBuy'
import {Grid,
        Col,
        Row,
        Button,
        ButtonGroup} from 'react-bootstrap'
import {connect} from 'react-redux'
import {Link} from 'react-router'

const mapStateToProps = (state) => ({
    shoppingList: state.allProducts.shoppingLists
})

class ShoppingLists extends React.Component {

    render(){
        var {
            shoppingList
        } = this.props

        return(
            <div className="background-shopping-lists">
                <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={7}>
                        <div className="shopping-lists">
                            <h1>Shopping Lists</h1>
                            {shoppingList.length > 0 ? ''
                                : 'Nie stowrzyłeś jeszcze listy zakupów' }
                        </div>
                        <ButtonGroup vertical block>
                            {console.log(shoppingList)}
                            {shoppingList.filter(list => list.length >0).map(
                                    (list, index) => <div>
                                        <Link to={`/shopping-lists/`+ index}>
                                            <Button>
                                                Lista zakupów nr {index +1}
                                            </Button>
                                        </Link>
                                                    </div>)}
                        </ButtonGroup>
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
