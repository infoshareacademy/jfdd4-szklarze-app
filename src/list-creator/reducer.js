import {INCREASE_AMOUNT, DECREASE_AMOUNT, SAVE_NEW_LIST } from './actionTypes'

const initialState = {
    itemsToBuy: [],
    productsToDisplay: [],
    shoppingLists: []
}

export default (state = initialState, action) => {

    switch (action.type) {

        case SAVE_NEW_LIST:
            return Object.assign({}, state, {
                shoppingLists: state.shoppingLists.concat([state.itemsToBuy]),
                itemsToBuy: []
            })
        default:
            return state
    }
}