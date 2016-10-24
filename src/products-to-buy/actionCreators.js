import { MARK_PRODUCT_AS_PURCHASED } from './actionTypes'

export function markProductAsPurchased(productId, listId) {
    return{
        type: MARK_PRODUCT_AS_PURCHASED,
        productId: productId,
        listId: listId
    }
}