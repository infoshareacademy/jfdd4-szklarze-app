import { DELETE_LIST, CLONE_LIST } from './actionTypes'

export function cloneList(listId) {
    return {
        type: CLONE_LIST,
        listId: listId
    }
}

export function deleteList(listId) {
    return {
        type: DELETE_LIST,
        listId: listId
    }
}