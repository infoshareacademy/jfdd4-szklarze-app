import { MARK_FAVORITE_PRODUCT } from './actionTypes'
import store from '../store'

const initialState = {
    favoriteProductIds:
        typeof localStorage.getItem('favoriteProductIds') !== 'undefined' &&
        localStorage.getItem('favoriteProductIds') !== null ?
            JSON.parse(localStorage.getItem('favoriteProductIds')) :
            []
}

export default (state = initialState, action) => {
    let productIds = state.favoriteProductIds,
        favoriteProductIds = productIds.indexOf(action.productId) === -1 ?
            productIds.concat([action.productId]) :
            productIds.filter((id) => id !== action.productId);

    switch (action.type) {
        case MARK_FAVORITE_PRODUCT:
            store.subscribe(() => {
                localStorage.setItem('favoriteProductIds', JSON.stringify(store.getState().favorites.favoriteProductIds || []))
            })
            return Object.assign({}, state, {
                favoriteProductIds: favoriteProductIds
            })
        default:
            return state
    }
}