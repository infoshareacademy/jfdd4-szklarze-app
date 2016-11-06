import React from 'react'
import TiShoppingCart from 'react-icons/lib/ti/shopping-cart'
import MdAttachMoney from 'react-icons/lib/md/attach-money'

const BudgetPanel = ({
    basketValue,
    savedBudget
}) => {

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