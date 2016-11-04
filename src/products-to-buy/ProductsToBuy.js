import React from 'react'
import {connect} from 'react-redux'
import ListNameEditor from  '../list-creator/list-name-editor/ListNameEditor'
import ListTable from './list-table/ListTable'
import PriceReporter from './price-reporter/PriceReporter'
import './ProductsToBuy.css'
import {
markProductAsPurchased,
fetchPrices,
showProductPricesTrend
} from './actionCreators'

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

class ProductsToBuy extends React.Component {

    render() {

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

                        <ListTable
                            shoppingLists={shoppingLists}
                            products={products}
                            markProductAsPurchased={markProductAsPurchased}
                            prices={prices}
                            showProductPricesTrend={showProductPricesTrend}
                            activeProduct={activeProduct}
                            list={list}
                            listId={listId}
                        />

                    </div>}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsToBuy)