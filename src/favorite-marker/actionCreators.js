import { MARK_FAVORITE_PRODUCT } from './actionTypes'

export function markFavoriteProduct(productId) {
    return {
        type: MARK_FAVORITE_PRODUCT,
        productId: productId
    }
}