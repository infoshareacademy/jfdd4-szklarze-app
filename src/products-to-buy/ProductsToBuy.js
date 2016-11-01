import React from 'react'
import {connect} from 'react-redux'
import ListDeleter from '../list-creator/list-deleter/ListDeleter'
import ListNameEditor from  '../list-creator/list-name-editor/ListNameEditor'
import './ProductsToBuy.css'
import {markProductAsPurchased} from './actionCreators'

const mapStateToProps = (state) => ({
    shoppingLists: state.listCreator.shoppingLists,
    products: state.products,
})

const mapDispatchToProps = (dispatch) => ({
    markProductAsPurchased: (productId, listId) => dispatch(markProductAsPurchased(productId, listId))
})

const removeStringsFromList = (list, index) => (
    typeof list[list.length - 1] === 'string' ?
    index !== list.length - 1 :
        true
)

class ProductsToBuy extends React.Component {

    render() {
        var {
            shoppingLists,
            products,
            markProductAsPurchased,
        } = this.props

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

                    <ListNameEditor
                        list={list}
                        listId={listId}
                    />

                    <ul className="list-group">
                        {shoppingLists.length > 0 ?

                            list
                                .filter(function (product, index) {
                                    return removeStringsFromList(list, index)
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
                                            onClick={() => markProductAsPurchased(id, listId)}>
                                            <span className="badge">
                                                {quantity + ' szt.'}
                                            </span>
                                            {result}
                                        </li>
                                    )
                                }) : ''}
                    </ul>
                        <ListDeleter listId={listId}/>
                </div>}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsToBuy)