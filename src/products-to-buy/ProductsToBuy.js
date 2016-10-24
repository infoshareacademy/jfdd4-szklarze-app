import React from 'react'
import {connect} from 'react-redux'
import ListDeleter from '../list-creator/list-deleter/ListDeleter'
import './ProductsToBuy.css'
import {markProductAsPurchased, updateProductsToBuy, resetPurchased} from '../list-creator/actionCreators'

const mapStateToProps = (state) => ({
    shoppingLists: state.allProducts.shoppingLists,
    products: state.products,
    purchasedProductsIds: state.allProducts.purchasedProductsIds
})

const mapDispatchToProps = (dispatch) => ({
    markProductAsPurchased: (productId) => dispatch(markProductAsPurchased(productId)),
    updateProductsToBuy: (productId, listId) => dispatch(updateProductsToBuy(productId, listId)),
    resetPurchased: ()=> dispatch(resetPurchased())

})

const didUserSetListName = (list, index) => (
    typeof list[list.length - 1] === 'string' ?
    index !== list.length - 1 :
        true
)

function printListName(list, listId) {
    const listNumber = Number(listId) + 1;
    return typeof list[list.length - 1] !== 'object' ?
        list[list.length - 1] :
    'Lista zakupów nr ' + listNumber
}

class ProductsToBuy extends React.Component {

    render() {
        var {
            shoppingLists,
            products,
            purchasedProductsIds,
            markProductAsPurchased,
            updateProductsToBuy,
            resetPurchased
        } = this.props

        function markAndUpdate(productId, listId) {
            markProductAsPurchased(productId);
            updateProductsToBuy(productId, listId);
        }

        let listId = this.props.params.listId;
        let list = shoppingLists[listId];
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Lista produktów:</div>
                {listId === undefined ?
                    <div><p className="intro">Kliknij w wybraną listę zakupów aby wyświetlić jej zawartość</p></div>
                    : <div className="panel-body">
                    <h4>{printListName(list, listId)}</h4>
                    <ul className="list-group">
                        {shoppingLists.length > 0 ?

                            list
                                .filter(function (product, index) {
                                    return didUserSetListName(list, index)
                                })
                                .map((product) => ([product.productId, product.quantity]))
                                .map(function (item) {
                                    var id = item[0],
                                        quantity = item[1],
                                        result = products
                                            .filter((product) => product.productId === id)
                                            .map((item) => item.productName)
                                    return (
                                        <li className="list-group-item"
                                            key={id}
                                            onClick={() => markAndUpdate(id, listId)}>
                                            <span className="badge">{quantity + ' szt.'}</span>
                                            {result}
                                        </li>
                                    )
                                }) : ''}
                    </ul>
                    <p onClick={() => resetPurchased()}><ListDeleter listId={listId}/></p>
                </div>}
                <div className="panel-heading">Produkty kupione:</div>
                    <div>
                        {purchasedProductsIds
                            .map(function (item) {
                                var result = products
                                    .filter((product) => product.productId === item)
                                    .map((item) => item.productName)
                                return (
                                    <li className="list-group-item, purchased" key={item}>
                                        {result}
                                    </li>
                                )
                            })}
                    </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsToBuy)