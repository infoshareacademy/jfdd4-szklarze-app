import React from 'react'
import ListRow from '../list-row/ListRow'
import ListManager from '../../list-creator/list-manager/ListManager'
import Chart from '../../chart/Chart'
import MdEventAvailable from 'react-icons/lib/md/event-available'
import MdInfoOutline from 'react-icons/lib/md/info-outline'
import MdAddLocation from 'react-icons/lib/md/add-location'
import  {Table} from 'react-bootstrap'

const shareUrl = 'http://app.szklarze.jfdd4.is-academy.pl/map';

const removeStringsFromList = (list, index) => (
    typeof list[list.length - 1] === 'string' ?
    index !== list.length - 1 :
        true
)

const ListTable = ({
    shoppingLists,
    products,
    markProductAsPurchased,
    prices,
    showProductPricesTrend,
    activeProduct,
    list,
    listId
}) => (
    <div>
        <Table responsive>
            <tbody>
            {shoppingLists.length > 0 ?

                list
                    .filter((product, index) => removeStringsFromList(list, index))
                    .map(product => ([
                        product.productId,
                        product.quantity,
                        product.purchased,
                        product.purchaseDate]))
                    .map(item => {
                        let id = item[0],
                            quantity = item[1],
                            purchased = Boolean(item[2]),
                            purchaseDate = item[3],

                            productPrices = prices
                                .filter(product => (id === product.productId))
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
                                markProductAsPurchased={markProductAsPurchased}
                            />
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
    </div>
)

export default ListTable