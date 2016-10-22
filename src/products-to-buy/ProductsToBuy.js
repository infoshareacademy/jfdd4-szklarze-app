import React from 'react'
import {connect} from 'react-redux'
import {ListGroupItem,
        ListGroup,
        Col,
        Row
        } from 'react-bootstrap'

const mapStateToProps = (state) => ({
    shoppingList: state.allProducts.shoppingLists,
    products: state.products
})

class ProductsToBuy extends React.Component {
    render() {
        var {
            shoppingList,
            products
        } = this.props

        let i = this.props.params.listId
        let list =shoppingList[i];
        return (
            <div>
                <h1>ProductsToBuy</h1>
                {i === undefined ?
                    <div>Tu wyświetli się twoja lista produktów</div> :
                    <ListGroup>
                        {shoppingList.length > 0 ?

                            list
                                .map((product) => ([product.productId, product.quantity]))
                                .map(function (productId) {
                                    var quantity = productId[1],
                                    result = products
                                        .filter((product) => product.productId === productId[0])
                                            .map((item) => item.productName)
                                    return(
                                        <ListGroupItem>
                                            <Row>
                                                <Col md={8}>
                                                    {result}
                                                </Col>
                                                <Col md={4}>
                                                    {quantity +' ' + 'sztuki'}
                                                    </Col>
                                                </Row>
                                            </ListGroupItem>
                                    )
                            }) : ''}
                    </ListGroup>}

                </div>
        )
    }
}

export default connect(mapStateToProps)(ProductsToBuy)