import React from 'react'
import {connect} from 'react-redux'
import ListDeleter from '../list-creator/list-deleter/ListDeleter'
import ListNameEditor from  '../list-creator/list-name-editor/ListNameEditor'
import './ProductsToBuy.css'
import {markProductAsPurchased} from './actionCreators'
import MdEventAvailable from 'react-icons/lib/md/event-available'
import MdCheckBoxOutlineBlank from 'react-icons/lib/md/check-box-outline-blank'
import MdCheckBox from 'react-icons/lib/md/check-box'
import MdInfoOutline from 'react-icons/lib/md/info-outline'
import MdAddLocation from 'react-icons/lib/md/add-location'
import  {Table, responsive} from 'react-bootstrap'


const mapStateToProps = (state) => ({
    shoppingLists: state.listCreator.shoppingLists,
    products: state.products
})

const mapDispatchToProps = (dispatch) => ({
    markProductAsPurchased: (productId, listId) => dispatch(markProductAsPurchased(productId, listId)),
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
                       {/* <ListNameEditor list={list} listId={listId}/>*/}

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
                                            result = products
                                                .filter((product) => product.productId === id)
                                                .map((item) => item.productName)
                                        return (
                                            <tr>
                                                <td onClick={() => markProductAsPurchased(id, listId)}>
                                                    <MdCheckBoxOutlineBlank style={{display: purchased ? 'none' : ''}}/>
                                                    <MdCheckBox style={{display: purchased ? '' : 'none'}} className="purchase-info"/></td>
                                                <td onClick={() => markProductAsPurchased(id, listId)} style={{textDecoration: purchased ? 'line-through' : 'none'}}>
                                                    {result}
                                                </td>
                                                <td style={{textDecoration: purchased ? 'line-through' : 'none'}}>{quantity + ' szt.'}</td>
                                                <td style={{display: purchased ? '' : ''}}><MdInfoOutline/> 3,69zł</td>
                                                <td style={{display: purchased ? '' : 'none'}}><MdEventAvailable/> {purchaseDate}</td>
                                                <td style={{display: purchased ? '' : 'none'}}><MdAddLocation/></td>
                                            </tr>
                                        )
                                    }) : ''}
                            </tbody>
                        </Table>
                        <Table responsive>
                            <tbody className="legend">
                            <tr><MdInfoOutline/> - Srednia cena produktu w sklepach </tr>
                            <tr><MdEventAvailable/> - Data zakupu</tr>
                            <tr><MdAddLocation/> - Kupiłeś taniej? Udostępnij lokalizację innym użytkownikom</tr>
                            <tr><ListDeleter listId={listId}/></tr>
                            </tbody>
                        </Table>
                    </div>}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsToBuy)