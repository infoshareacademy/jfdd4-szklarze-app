import {
    SAVE_NEW_LIST,
    RECEIVE_SHOPPING_LISTS,
    REQUEST_SHOPPING_LISTS,
    UPDATE_SHOPPING_LISTS_BEGIN,
    UPDATE_SHOPPING_LISTS_END
} from './actionTypes'
import fetch from 'isomorphic-fetch'
import store from '../store'

export function saveNewList(itemsToBuy, listName, savedBudget, basketValue){
    return {
        type: SAVE_NEW_LIST,
        itemsToBuy: itemsToBuy,
        listName: listName,
        savedBudget: savedBudget,
        basketValue: basketValue
    }
}

function requestShoppingLists() {
    return {
        type: REQUEST_SHOPPING_LISTS
    }
}

function receiveShoppingLists(shoppingLists) {
    return {
        type: RECEIVE_SHOPPING_LISTS,
        shoppingLists: shoppingLists
    }
}

export function fetchShoppingLists() {

    let userId = 5 //TODO: static user id, change it when logging with SM is provided

    return function (dispatch) {
        dispatch(requestShoppingLists())
        return fetch('https://jfdd4-szklarze-app-janusz.herokuapp.com/api/users/'+userId+
            '?filter[fields][shoppingLists]=true')
            .then(response => response.json())
            .then(shoppingLists => dispatch(receiveShoppingLists(shoppingLists.shoppingLists)))
    }
}

function updateExternalShoppingListsBegin() {
    return {
        type: UPDATE_SHOPPING_LISTS_BEGIN
    }
}

function updateExternalShoppingListsEnd() {
    return {
        type: UPDATE_SHOPPING_LISTS_END
    }
}

export function updateExternalShoppingLists(){

    const state = store.getState();
    const shoppingLists = state.listCreator.shoppingLists;

    return function (dispatch) {
        dispatch(updateExternalShoppingListsBegin())
        return fetch('https://jfdd4-szklarze-app-janusz.herokuapp.com/api/users', {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                shoppingLists: shoppingLists,
                id: 5 //TODO: this is static user id, change it when logging with SM is
            })
        })
            .then(response => response.json())
            .then(shoppingList => {
                dispatch(updateExternalShoppingListsEnd())
            })
    }
}
