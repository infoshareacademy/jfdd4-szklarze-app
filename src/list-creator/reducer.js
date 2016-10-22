import {SAVE_NEW_LIST } from './actionTypes'

const initialState = {
    shoppingLists: [],
    itemsToBuy: []
}

export default (state = initialState, action) => {

    switch (action.type) {

        case SAVE_NEW_LIST:
            return Object.assign({}, state, {
                shoppingLists: state.shoppingLists.concat(action.itemsToBuy),
                itemsToBuy: []
            })
        default:
            return state
    }
}