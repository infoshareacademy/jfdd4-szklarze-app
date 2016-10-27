import {
    UPDATE_LIST_NAME,
    OPEN_EDIT_FIELD,
    HIDE_EDIT_FIELD
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

export function updateListName (newListName) {
    return {
        type: UPDATE_LIST_NAME,
        newListName: newListName
    }
}