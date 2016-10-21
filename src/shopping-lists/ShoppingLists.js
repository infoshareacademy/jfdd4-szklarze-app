import React from 'react'
import ProductsToBuy from'../products-to-buy/ProductsToBuy'
import {Grid,
        Col,
        Row,
        Button,
        ButtonGroup} from 'react-bootstrap'
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
                            {shoppingList.length > 0 ? ''
                                : 'Nie stowrzyłeś jeszcze listy zakupów' }
                        </div>
                        <ButtonGroup vertical block>
                            {console.log(shoppingList)}
                            {shoppingList.map(list => <Button>list</Button>)}
                        </ButtonGroup>
                    </Col>

                    <Col xs={12} md={5}>
                        <div className="shopping-lists">
                            <ProductsToBuy{...shoppingList}/>
                        </div>
                    </Col>
                </Row>
            </Grid>


    )
    }
}
export default connect(mapStateToProps)(ShoppingLists)
