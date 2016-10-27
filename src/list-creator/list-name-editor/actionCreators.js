import {
    UPDATE_LIST_NAME,
    OPEN_EDIT_FIELD,
    HIDE_EDIT_FIELD,
    STORE_NEW_LIST_NAME
} from './actionTypes'

export function openEditField () {
    return {
        type: OPEN_EDIT_FIELD
    }
}

export function hideEditField () {
    return {
        type: HIDE_EDIT_FIELD
    }
}

export function updateListName (newListName, listId) {
    return {
        type: UPDATE_LIST_NAME,
        newListName: newListName,
        listId: listId
    }
}

export function storeNewListName (changedListName) {
    return {
        type: STORE_NEW_LIST_NAME,
        changedListName: changedListName
    }
}