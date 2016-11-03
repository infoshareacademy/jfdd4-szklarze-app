import React from 'react'
import {connect} from 'react-redux'
import ListManager from '../list-creator/list-manager/ListManager'
import ListNameEditor from  '../list-creator/list-name-editor/ListNameEditor'
import PriceReporting from './price-reporting/PriceReporting'
import './ProductsToBuy.css'
import {markProductAsPurchased, fetchPrices} from './actionCreators'
import MdEventAvailable from 'react-icons/lib/md/event-available'
import MdCheckBoxOutlineBlank from 'react-icons/lib/md/check-box-outline-blank'
import MdCheckBox from 'react-icons/lib/md/check-box'
import MdInfoOutline from 'react-icons/lib/md/info-outline'
import MdAddLocation from 'react-icons/lib/md/add-location'
import  {Table, responsive} from 'react-bootstrap'
import {
    ShareButtons,
    ShareCounts,
    generateShareIcon
} from 'react-share';


const mapStateToProps = (state) => ({
    shoppingLists: state.listCreator.shoppingLists,
    products: state.products,
    prices: state.pricesData.prices
})

const mapDispatchToProps = (dispatch) => ({
    markProductAsPurchased: (productId, listId) => dispatch(markProductAsPurchased(productId, listId)),
    fetchPrices: () => dispatch(fetchPrices())
})

const removeStringsFromList = (list, index) => (
    typeof list[list.length - 1] === 'string' ?
    index !== list.length - 1 :
        true
)
const {
    FacebookShareButton
} = ShareButtons;

const {
    FacebookShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');

class ProductsToBuy extends React.Component {

    render() {
        const shareUrl = 'http://app.szklarze.jfdd4.is-academy.pl/map';

        var {
            shoppingLists,
            products,
            markProductAsPurchased,
            prices,
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
                                            <tr>
                                                <td onClick={() => markProductAsPurchased(id, listId)}>
                                                    <MdCheckBoxOutlineBlank style={{display: purchased ? 'none' : ''}}/>
                                                    <MdCheckBox style={{display: purchased ? '' : 'none'}} className="purchase-info"/></td>
                                                <td onClick={() => markProductAsPurchased(id, listId)} style={{textDecoration: purchased ? 'line-through' : 'none'}}>
                                                    {result}
                                                </td>
                                                <td style={{textDecoration: purchased ? 'line-through' : 'none'}}>{quantity + ' szt.'}</td>
                                                <td style={{display: purchased ? '' : ''}}><MdInfoOutline/>
                                                     {(productPrices
                                                    .reduce(function(prev, next) {
                                                        let sum = prev+next;
                                                            return sum;
                                                }, 0)/productPrices.length).toFixed(2) + ' ' + 'zł'} </td>
                                                <td style={{display: purchased ? '' : 'none'}}><MdEventAvailable/> {purchaseDate}</td>
                                                <td style={{display: purchased ? '' : 'none'}}><MdAddLocation/></td>
                                                <td style={{display: purchased ? '' : 'none'}}><FacebookShareButton  url={shareUrl} title={result + ' '+ '- kup taniej! Janusz poleca!'}><FacebookIcon round size={20}/>
                                                </FacebookShareButton></td>
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
                            <tr><ListManager listId={listId}/></tr>
                            </tbody>
                        </Table>
                    </div>}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsToBuy)