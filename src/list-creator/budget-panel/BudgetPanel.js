import React from 'react'
import TiShoppingCart from 'react-icons/lib/ti/shopping-cart'
import MdAttachMoney from 'react-icons/lib/md/attach-money'

const BudgetPanel = ({
    itemsToBuy,
    savedBudget,
    pricesData
}) => {

    const getItemsAvgPrice = (item) => {
        let productPrices = pricesData
            .filter(marker => marker.productId === item.productId)
            .map(marker => marker.price)
        return (productPrices
            .reduce((prev, next) => prev + next)/productPrices.length).toFixed(2)
    }

    const basketValue = itemsToBuy
        .map(item => getItemsAvgPrice(item)*item.quantity)
        .reduce( (prev, next) => prev + next, 0);

    return (
        <div className="budget-panel">
            <div className="sum">
                <TiShoppingCart/>
                <span>
                            {' '}{basketValue.toFixed(2)}
                    {' zł'}
                        </span>
            </div>
            <div className="budget">
                <span>{'Budżet: '}</span>
                <MdAttachMoney />
                <span>
                            {' '}
                    {Number(savedBudget).toFixed(2)}
                    {' zł'}
                        </span>
            </div>
            <div
                className={Number(savedBudget) >= Number(basketValue) ?
                    "budget-indicator" : "budget-indicator no-money"}>
            </div>
        </div>
    )
}

export default BudgetPanel