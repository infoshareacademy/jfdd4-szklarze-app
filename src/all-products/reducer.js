import {INCREASE_AMOUNT, DECREASE_AMOUNT} from './actionTypes'

const initialState = {
    itemsToBuy: [],
    shoppingLists: [

    ]
}

export default (state = initialState, action) => {
    let itemsToBuyContainsGivenItem = state.itemsToBuy.filter(item => item.productId === action.productId).length > 0;
    let itemsToBuy;

    switch (action.type) {
        case INCREASE_AMOUNT:
            itemsToBuy = itemsToBuyContainsGivenItem ?
                state.itemsToBuy.map(item => (item.productId === action.productId ?
                {productId: item.productId, quantity: item.quantity + 1} : item)) :
                state.itemsToBuy.concat([{productId: action.productId, quantity: 1}]);
            return Object.assign({}, state, {
                itemsToBuy: itemsToBuy
            })
        case DECREASE_AMOUNT:
            itemsToBuy = itemsToBuyContainsGivenItem ?
                state.itemsToBuy.map(item => (item.productId === action.productId ?
                {productId: item.productId, quantity: item.quantity - 1} : item)) : state.itemsToBuy;
            return Object.assign({}, state, {
                itemsToBuy: itemsToBuy.filter( item => item.quantity > 0)
            })
        default:
            return state
    }
}