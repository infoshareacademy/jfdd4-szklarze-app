import React from 'react'
import ListRow from '../list-row/ListRow'
import ListManager from '../../list-creator/list-manager/ListManager'
import BudgetPanel from '../../list-creator/budget-panel/BudgetPanel'
import Chart from '../../chart/Chart'
import MdEventAvailable from 'react-icons/lib/md/event-available'
import MdInfoOutline from 'react-icons/lib/md/info-outline'
import MdAddLocation from 'react-icons/lib/md/add-location'
import {Table} from 'react-bootstrap'

const shareUrl = 'http://app.szklarze.jfdd4.is-academy.pl/map';

const removeLastListItem = (list) =>
    list.filter((listItem, index) => list.length - 1 !== index)


const ListTable = ({
    shoppingLists,
    products,
    markProductAsPurchased,
    prices,
    showProductPricesTrend,
    activeProduct,
    list,
    listId
}) => {

    const getItemsAvgPrice = (item) => {
        let productPrices = prices
            .filter(marker => marker.productId === item.productId)
            .map(marker => marker.price)
        return (productPrices
            .reduce((prev, next) => prev + next)/productPrices.length).toFixed(2)
    }

    const basketValue = removeLastListItem(list)
        .map(item => getItemsAvgPrice(item)*item.quantity)
        .reduce( (prev, next) => prev + next, 0);

    return (
        <div>
            <Table responsive>
                <tbody>
                {shoppingLists.length > 0 ?

                    removeLastListItem(list)
                        .map(product => {
                            let id = product.productId,
                                quantity = product.quantity,
                                purchased = Boolean(product.purchased),
                                purchaseDate = product.purchaseDate,

                                productPrices = prices
                                    .filter(item => (id === item.productId))
                                    .map(item => Number(item.price)),

                                result = products
                                    .filter(product => product.productId === id)
                                    .map(item => item.productName)

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

            <BudgetPanel
                savedBudget={Number(list[list.length-1][1]).toFixed(2)}
                basketValue={basketValue}
            />

            <Table responsive>
                <tbody className="legend">
                <tr><MdInfoOutline/> - Srednia cena produktu w sklepach </tr>
                <tr><MdEventAvailable/> - Data zakupu</tr>
                <tr><MdAddLocation/> - Kupiłeś taniej? Udostępnij lokalizację innym użytkownikom</tr>
                <tr><ListManager listId={listId}/></tr>
                <tr><Chart productId={activeProduct}/></tr>
                </tbody>
            </Table>
        </div>
    )
}

export default ListTable

