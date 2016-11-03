import React from 'react'
import MdTrendingUp from 'react-icons/lib/md/trending-up'
import MdCheckBoxOutlineBlank from 'react-icons/lib/md/check-box-outline-blank'
import MdCheckBox from 'react-icons/lib/md/check-box'
import MdEventAvailable from 'react-icons/lib/md/event-available'
import MdInfoOutline from 'react-icons/lib/md/info-outline'
import {
    ShareButtons,
    generateShareIcon
} from 'react-share';

const {
    FacebookShareButton
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');

const ListRow = ({
    id,
    listId,
    purchased,
    result,
    quantity,
    productPrices,
    purchaseDate,
    shareUrl,
    showProductPricesTrend,
    markProductAsPurchased
}) => (
        <tr>
            <td onClick={() => markProductAsPurchased(id, listId)}>
                <MdCheckBoxOutlineBlank
                    style={{display: purchased ? 'none' : ''}}/>
                <MdCheckBox
                    style={{display: purchased ? '' : 'none'}}
                    className="purchase-info"/>
            </td>
            <td onClick={() => markProductAsPurchased(id, listId)}
                style={{textDecoration: purchased ? 'line-through' : 'none'}}>
                {result}
            </td>
            <td style={{textDecoration: purchased ? 'line-through' : 'none'}}>
                {quantity + ' szt.'}
            </td>
            <td style={{display: purchased ? '' : ''}}>
                <MdInfoOutline/>
                {((productPrices
                    .reduce((prev, next) =>
                        prev+next), 0)/productPrices.length)
                    .toFixed(2) + ' ' + 'zł'}
            </td>
            <td onClick={() => showProductPricesTrend(id)}>
                <MdTrendingUp/>
            </td>
            <td style={{display: purchased ? '' : 'none'}}>
                <MdEventAvailable/> {purchaseDate}
            </td>
            <td style={{display: purchased ? '' : 'none'}}>
                <FacebookShareButton
                    url={shareUrl}
                    title={result + ' '+ '- kup taniej! Janusz poleca!'}>
                <FacebookIcon
                    round size={20}/>
                </FacebookShareButton>
            </td>
        </tr>
)

export default ListRow