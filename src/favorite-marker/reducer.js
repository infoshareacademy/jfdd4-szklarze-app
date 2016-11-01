import {
    MARK_FAVORITE_PRODUCT,
} from './actionTypes'

const localStorageData = JSON.parse(localStorage.getItem('redux'))

const initialState = {
    favoriteProductsIds:
        typeof localStorageData !== 'undefined' && localStorageData !== null ?
            localStorageData.favorites.favoriteProductsIds :
            []
}

export default (state = initialState, action) => {
    let productIds = state.favoriteProductsIds,
        favoriteProductsIds = productIds.indexOf(action.productId) === -1 ?
            productIds.concat([action.productId]) :
            productIds.filter((id) => id !== action.productId);

    switch (action.type) {
        case MARK_FAVORITE_PRODUCT:
            return Object.assign({}, state, {
                favoriteProductsIds: favoriteProductsIds
            })
        default:
            return state
    }
}