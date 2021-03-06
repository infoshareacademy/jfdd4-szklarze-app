import {
    INCREASE_AMOUNT,
    DECREASE_AMOUNT,
} from './actionTypes'

import {
    SAVE_NEW_LIST
} from '../list-creator/actionTypes'

const initialState = {
    itemsToBuy: []
}

export default (state = initialState, action) => {
    let itemsToBuy = state.itemsToBuy
    let itemsToBuyContainsGivenItem =
        state.itemsToBuy
            .filter(item => item.productId === action.productId).length > 0;

    switch (action.type) {
        case INCREASE_AMOUNT:
            itemsToBuy = itemsToBuyContainsGivenItem ?
                state.itemsToBuy
                    .map(item =>
                        (item.productId === action.productId ?
                                {
                                    productId: item.productId,
                                    quantity: item.quantity + 1,
                                    price: item.price,
                                    purchased: false,

                                } :
                                item)
                        ) :
                state.itemsToBuy.concat([
                        {
                            productId: action.productId,
                            quantity: 1,
                            price: action.price,
                            purchased: false,

                        }]);

            return Object.assign({}, state, {
                itemsToBuy: itemsToBuy
            })

        case DECREASE_AMOUNT:
            itemsToBuy = itemsToBuyContainsGivenItem ?
                state.itemsToBuy
                    .map(item =>
                        (item.productId === action.productId ?
                            {
                                productId: item.productId,
                                quantity: item.quantity - 1,
                                price: item.price
                            } : item)
                    ) :
                state.itemsToBuy;

            return Object.assign({}, state, {
                itemsToBuy: itemsToBuy.filter( item => item.quantity > 0)
            })

        case SAVE_NEW_LIST:
            return Object.assign({}, state, {
                itemsToBuy: []
            })

        default:
            return state
    }
}
