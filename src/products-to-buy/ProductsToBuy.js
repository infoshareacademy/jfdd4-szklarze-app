import React from 'react'
import {connect} from 'react-redux'
import './ProductsToBuy.css'
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
            <div className="panel panel-default">
                <div className="panel-heading">Lista zakupów:</div>
                {i === undefined ?
                    <div><p>Kliknij w wybraną listę zakupów aby wyświetlić jej zawartość</p></div>
                    : <div className="panel-body">
                    <ul className="list-group">
                        {shoppingList.length > 0 ?

                            list
                                .map((product) => ([product.productId, product.quantity]))
                                .map(function (item) {
                                    var id=item[0],
                                        quantity = item[1],
                                        result = products
                                            .filter((product) => product.productId === item[0])
                                            .map((item) => item.productName)
                                    return(
                                        <li className="list-group-item" key={id}>
                                            <span className="badge">{quantity +' ' + 'szt.'}</span>
                                                    {result}
                                        </li>
                                    )
                            }) : ''}
                    </ul>
                    </div>}
                </div>
        )
    }
}

export default connect(mapStateToProps)(ProductsToBuy)