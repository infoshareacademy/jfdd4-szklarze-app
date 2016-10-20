import { GET_AMOUNT }from './actionTypes'

export function getAmount(productId) {
    return {
        type: GET_AMOUNT,
        productId: productId
    }
}