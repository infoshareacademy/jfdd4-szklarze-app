import {
    SAVE_NEW_LIST_BEGIN,
    SAVE_NEW_LIST_END,
    SET_CURRENT_LIST_NAME,
    DELETE_LIST,
    RECEIVE_SHOPPING_LISTS,
    REQUEST_SHOPPING_LISTS,
    UPDATE_SHOPPING_LISTS_BEGIN,
    UPDATE_SHOPPING_LISTS_END
} from './actionTypes'
import fetch from 'isomorphic-fetch'
import store from '../store'

export function saveNewList(itemsToBuy, currentListName, shoppingLists){

    let shoppingListWithName = itemsToBuy.concat(currentListName)

    let updatedShoppingLists = shoppingLists.concat([shoppingListWithName])

    return function (dispatch) {
        dispatch(saveNewListBegin())
        return fetch('https://jfdd4-szklarze-app-janusz.herokuapp.com/api/users', {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                shoppingLists: updatedShoppingLists,
                id: 5 //TODO: this is static user id, change it when logging with SM is
            })
        })
            .then(response => response.json())
            .then(shoppingList => {
                dispatch(saveNewListEnd())
            })
            .then(shoppingList => {
                dispatch(fetchShoppingLists())
            })
    }
}

function saveNewListBegin() {
    return {
        type: SAVE_NEW_LIST_BEGIN
    }
}

function saveNewListEnd() {
    return {
        type: SAVE_NEW_LIST_END
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

export function setCurrentListName(listName) {
    return {
        type: SET_CURRENT_LIST_NAME,
        listName: listName
    }
}

export function deleteList(listId) {
    return {
        type: DELETE_LIST,
        listId: listId
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
