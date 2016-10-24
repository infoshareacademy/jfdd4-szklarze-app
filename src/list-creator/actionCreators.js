import {
    INCREASE_AMOUNT,
    DECREASE_AMOUNT,
    SAVE_NEW_LIST,
    SET_CURRENT_LIST_NAME,
    DELETE_LIST,
    MARK_PRODUCT_AS_PURCHASED
} from './actionTypes'

export function saveNewList(){
    return {
        type: SAVE_NEW_LIST,
    }
}

export function increaseAmount(productId) {
    return {
        type: INCREASE_AMOUNT,
        productId: productId
    }
}

export function decreaseAmount(productId) {
    return {
        type: DECREASE_AMOUNT,
        productId: productId
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

export function markProductAsPurchased(productId, listId) {
    return{
        type: MARK_PRODUCT_AS_PURCHASED,
        productId: productId,
        listId: listId
    }
}