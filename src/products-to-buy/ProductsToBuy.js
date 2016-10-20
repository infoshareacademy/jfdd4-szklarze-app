import React from 'react'
import {connect} from 'react-redux'
import products from '../data/products'

const mapStateToProps = (state) => ({
    shoppingList: state.allProducts.shoppingLists
})

class ProductsToBuy extends React.Component {
    render() {
        var {
            shoppingList
        } = this.props
        let list =shoppingList[0];
        return (
            <div>
                <h1>ProductsToBuy</h1>
                {shoppingList.length > 0 ?
                    list.map(function (prod) {
                    return prod
                }).map(function (item) {
                    console.log(item.quantity, item.productId)
                        return item.productId
                    }).map(function (productid) {

                        var result =products.filter(function (prod) {
                            return prod.productId === productid})
                            .map(function (cos) {
                                console.log(cos.productName)
                                return cos.productName
                            })
                         return <p>{result}</p>
                        })
                    : ''}

                </div>



        )
    }
}

export default connect(mapStateToProps)(ProductsToBuy)