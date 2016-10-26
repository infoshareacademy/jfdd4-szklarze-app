import {
    SAVE_NEW_LIST,
    SET_CURRENT_LIST_NAME,
    DELETE_LIST
} from './actionTypes'

const initialState = {
    shoppingLists: [],
    currentListName: []
}

export default (state = initialState, action) => {
    // let itemsToBuy = state.itemsToBuy.itemsToBuy.concat(state.currentListName);

    switch (action.type) {

        case SAVE_NEW_LIST:
            return Object.assign({}, state, {
                shoppingLists: state.shoppingLists
                                    .concat([itemsToBuy]),
                itemsToBuy: [],
                currentListName: []
            })
        case SET_CURRENT_LIST_NAME:
            return Object.assign({}, state, {
                currentListName: action.listName
            })
        case DELETE_LIST:
            return Object.assign({}, state, {
                shoppingLists: state.shoppingLists
                    .filter((list, index) => index !== Number(action.listId))
            })
        default:
            return state
    }
}

