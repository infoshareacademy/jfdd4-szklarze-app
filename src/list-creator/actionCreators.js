import {
    SAVE_NEW_LIST,
    SET_CURRENT_LIST_NAME,
    DELETE_LIST
} from './actionTypes'

export function saveNewList(){
    return {
        type: SAVE_NEW_LIST,
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
