import React from 'react'
import {connect} from 'react-redux'
import {ListGroupItem,
        ListGroup,
        } from 'react-bootstrap'

const mapStateToProps = (state) => ({
    shoppingLists: state.allProducts.shoppingLists,
    products: state.products
})

class ProductsToBuy extends React.Component {
    render() {
        var {
            shoppingLists,
            products
        } = this.props

        let i= this.props.params.listId
        let list =shoppingLists[i];
        return (
            <div>
                <h1>ProductsToBuy</h1>
                {i === undefined ?
                    <div>Tu wyświetli się twoja lista produktów</div> :
                    <ListGroup>
                        {shoppingLists.length > 0 ?
                            list
                                .filter(function (product, index) {
                                    return index !== list.length-1
                                })
                                .map(function (item) {
                                console.log(item.quantity, item.productId)
                                return item.productId})
                                .map(function (productid) {
                                    (console.log(productid.quantity))
                                    var result = products
                                        .filter(function (prod) {
                                            return prod.productId === productid})
                                            .map(function (item) {
                                             console.log(item.productName)
                                             return item.productName
                                            })
                                    return(
                                        <ListGroupItem>
                                            {result}
                                            </ListGroupItem>
                                    )
                            }) : ''}
                    </ListGroup>}
                </div>
        )
    }
}

export default connect(mapStateToProps)(ProductsToBuy)