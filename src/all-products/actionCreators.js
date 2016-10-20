import { INCREASE_AMOUNT, DECREASE_AMOUNT, SAVE_NEW_LIST } from './actionTypes'

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

export function saveNewList() {
    return {
        type: SAVE_NEW_LIST
    }
}