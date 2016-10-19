import { INCREASE_AMOUNT, DECREASE_AMOUNT } from './actionTypes'

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