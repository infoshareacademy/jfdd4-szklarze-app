import { SAVE_NEW_LIST, RECEIVE_SHOPPING_LISTS } from './actionTypes'
import { UPDATE_LIST_NAME } from './list-name-editor/actionTypes'
import { DELETE_LIST, CLONE_LIST } from './list-manager/actionTypes'
import {MARK_PRODUCT_AS_PURCHASED} from '../products-to-buy/actionTypes'

const initialState = {
    shoppingLists: []
}

function date(){
    var Today = new Date();
    var Month = Today.getMonth()+1;
    var Day = Today.getDate();
    var Year = Today.getFullYear();
    return  Day + "-" + Month + "-" + Year;
}

export default (state = initialState, action) => {

    switch (action.type) {

        case SAVE_NEW_LIST:
            let shoppingListWithName = action.itemsToBuy.concat(action.listName)
            return Object.assign({}, state, {
                shoppingLists: state.shoppingLists
                    .concat([shoppingListWithName])
            })
        case RECEIVE_SHOPPING_LISTS:
            return Object.assign({}, state, {
                shoppingLists: action.shoppingLists
            })
        case UPDATE_LIST_NAME:
            return Object.assign({}, state, {
                shoppingLists: state.shoppingLists
                    .map( (list, index) => (
                        index === Number(action.listId) ?
                            typeof list[list.length-1] === 'object' ?
                                list.concat(action.newListName) :
                                list
                                    .slice(0, list.length-1)
                                    .concat(action.newListName) :
                            list
                    ))
            })
        case MARK_PRODUCT_AS_PURCHASED:
            return Object.assign({}, state, {
                shoppingLists: state.shoppingLists.map(
                    (shoppingList, index) =>
                        index === parseInt(action.listId) ?
                            shoppingList.map(
                                shoppingListItem =>
                                    shoppingListItem.productId === action.productId ?
                                    {...shoppingListItem,
                                        purchased: !shoppingListItem.purchased,
                                        purchaseDate: date()} : shoppingListItem) :
                            shoppingList
                )
            })
        case DELETE_LIST:
            return Object.assign({}, state, {
                shoppingLists: state.shoppingLists
                    .filter((list, index) => index !== Number(action.listId))
            })
        case CLONE_LIST:
            return Object.assign({}, state, {
                shoppingLists: state.shoppingLists
                    .concat(state.shoppingLists.filter((list, index) => index === Number(action.listId)))

            })
        default:
            return state
    }
}
