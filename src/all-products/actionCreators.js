import {
    INCREASE_AMOUNT,
    DECREASE_AMOUNT
} from './actionTypes'

export function increaseAmount(productId, price) {
    return {
        type: INCREASE_AMOUNT,
        productId: productId,
        price: price
    }
}

export function decreaseAmount(productId, price) {
    return {
        type: DECREASE_AMOUNT,
        productId: productId,
        price: price
    }
}
