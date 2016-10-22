import { SAVE_NEW_LIST } from './actionTypes'

export function saveNewList(itemsToBuy){
    return {
        type: SAVE_NEW_LIST,
        itemsToBuy: itemsToBuy
    }
}
