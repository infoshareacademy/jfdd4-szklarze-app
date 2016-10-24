import { MARK_PRODUCT_AS_PURCHASED, RESET_PURCHASED } from './actionTypes'

export function markProductAsPurchased(productId) {
    return{
        type: MARK_PRODUCT_AS_PURCHASED,
        productId: productId
    }
}
export function resetPurchased() {
    return{
        type: RESET_PURCHASED
    }
}