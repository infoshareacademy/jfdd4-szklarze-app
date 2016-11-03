import React from 'react'
import {connect} from 'react-redux'
import ListManager from '../list-creator/list-manager/ListManager'
import ListNameEditor from  '../list-creator/list-name-editor/ListNameEditor'
import ListRow from './ListRow/ListRow'
import './ProductsToBuy.css'
import {markProductAsPurchased, fetchPrices, showProductPricesTrend} from './actionCreators'
import MdEventAvailable from 'react-icons/lib/md/event-available'
import MdInfoOutline from 'react-icons/lib/md/info-outline'
import MdAddLocation from 'react-icons/lib/md/add-location'
import  {Table, responsive} from 'react-bootstrap'

import Chart from '../chart/Chart'

const mapStateToProps = (state) => ({
    shoppingLists: state.listCreator.shoppingLists,
    products: state.products,
    prices: state.pricesData.prices,
    activeProduct: state.pricesData.activeProduct,
})

const mapDispatchToProps = (dispatch) => ({
    markProductAsPurchased: (productId, listId) => dispatch(markProductAsPurchased(productId, listId)),
    showProductPricesTrend: (productId) => dispatch(showProductPricesTrend(productId)),
    fetchPrices: () => dispatch(fetchPrices())
})

const removeStringsFromList = (list, index) => (
    typeof list[list.length - 1] === 'string' ?
    index !== list.length - 1 :
        true
)



class ProductsToBuy extends React.Component {

    render() {
        const shareUrl = 'http://app.szklarze.jfdd4.is-academy.pl/map';

        var {
            shoppingLists,
            products,
            markProductAsPurchased,
            prices,
            showProductPricesTrend,
            activeProduct
        } = this.props;

        let listId = this.props.params.listId;
        let list = shoppingLists[listId];

        return (
            <div className="panel panel-default">
                <div className="panel-heading">Lista produktów:</div>
                {listId === undefined ?
                    <div>
                        <p className="intro">
                            Kliknij w wybraną listę zakupów aby wyświetlić jej zawartość
                        </p>
                    </div> :
                    <div className="panel-body">

                       <ListNameEditor list={list} listId={listId}/>

                        <Table responsive>
                            <tbody>
                            {shoppingLists.length > 0 ?

                                list
                                    .filter(function (product, index) {
                                        return removeStringsFromList(list, index)
                                    })
                                    .map((product) => ([product.productId, product.quantity, product.purchased, product.purchaseDate]))
                                    .map(function (item) {
                                        var id = item[0],
                                            quantity = item[1],
                                            purchased = Boolean(item[2]),
                                            purchaseDate = item[3],


                                            productPrices = prices
                                                .filter(function (product) {
                                                return id == product.productId})
                                                .map(function (item) {
                                                    let values= Number(item.price);
                                                    return values
                                            }),
                                            result = products

                                                .filter((product) => product.productId === id)
                                                .map((item) => item.productName)

                                        return (
                                            <ListRow
                                                    id={id}
                                                    listId={listId}
                                                    purchased={purchased}
                                                    result={result}
                                                    quantity={quantity}
                                                    productPrices={productPrices}
                                                    purchaseDate={purchaseDate}
                                                    shareUrl={shareUrl}
                                                    showProductPricesTrend={showProductPricesTrend}
                                                    markProductAsPurchased={markProductAsPurchased}/>
                                        )


                                    }) : ''}
                            </tbody>
                        </Table>
                        <Table responsive>
                            <tbody className="legend">
                            <tr><MdInfoOutline/> - Srednia cena produktu w sklepach </tr>
                            <tr><MdEventAvailable/> - Data zakupu</tr>
                            <tr><MdAddLocation/> - Kupiłeś taniej? Udostępnij lokalizację innym użytkownikom</tr>
                            <tr><ListManager listId={listId}/></tr>
                            <tr><Chart productId={activeProduct}/></tr>
                            </tbody>
                        </Table>
                    </div>}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsToBuy)