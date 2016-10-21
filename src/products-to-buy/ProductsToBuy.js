import React from 'react'
import {connect} from 'react-redux'
import products from '../data/products'
import {ListGroupItem,
        ListGroup,
        } from 'react-bootstrap'

const mapStateToProps = (state) => ({
    shoppingList: state.allProducts.shoppingLists
})

class ProductsToBuy extends React.Component {
    render() {
        var {
            shoppingList
        } = this.props

        let i= this.props.params.listId
        let list =shoppingList[i];
        console.log(list)
        return (
            <div>
                <h1>ProductsToBuy</h1>
                <ListGroup>
                    {shoppingList.length > 0 ?
                        list
                            .map(function (prod) {
                            return prod})
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
                </ListGroup>
                </div>



        )
    }
}

export default connect(mapStateToProps)(ProductsToBuy)