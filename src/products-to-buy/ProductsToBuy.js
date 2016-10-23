import React from 'react'
import {connect} from 'react-redux'
import {
    ListGroupItem,
    ListGroup,
} from 'react-bootstrap'
import ListDeleter from '../list-creator/list-deleter/ListDeleter'

const mapStateToProps = (state) => ({
    shoppingLists: state.allProducts.shoppingLists,
    products: state.products
})

const didUserSetListName = (list, index) => (
    typeof list[list.length-1] === 'string' ?
        index !== list.length-1 :
        true
)

function printListName(list, listId) {
    const listNumber = Number(listId)+1;
    return typeof list[list.length-1] !== 'object' ?
        list[list.length-1] :
        'Lista zakupów nr '+ listNumber
}

class ProductsToBuy extends React.Component {
    render() {
        var {
            shoppingLists,
            products
        } = this.props

        let listId= this.props.params.listId
        let list =shoppingLists[listId];
        return (
            <div>
                <h1>ProductsToBuy</h1>
                {listId === undefined ?
                    <div>Tu wyświetli się twoja lista produktów</div> :
                    <ListGroup>
                        <h2>{printListName(list, listId)}</h2>
                        <ListDeleter listId={listId}/>
                        {shoppingLists.length > 0 ?
                            list
                                .filter(function (product, index) {
                                    return didUserSetListName(list, index)
                                })
                                .map(function (item) {
                                    return item.productId})
                                .map(function (productid) {
                                    return(
                                        <div>
                                            <ListGroupItem>
                                                {products
                                                    .filter(function (prod) {
                                                        return prod.productId === productid})
                                                    .map(function (item) {
                                                        return item.productName
                                                    })}
                                            </ListGroupItem>
                                        </div>
                                    )
                                }) : ''
                        }
                    </ListGroup>}
                </div>
        )
    }
}

export default connect(mapStateToProps)(ProductsToBuy)