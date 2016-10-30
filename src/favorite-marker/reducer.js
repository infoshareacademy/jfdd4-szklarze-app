import {
    MARK_FAVORITE_PRODUCT_BEGIN,
    MARK_FAVORITE_PRODUCT_END,
    RECEIVE_FAVORITES
} from './actionTypes'
import store from '../store'

const initialState = {
    favoriteProductsIds: [],
    markingFavoriteProduct: false
}

export default (state = initialState, action) => {

    switch (action.type) {
        case RECEIVE_FAVORITES:
            return Object.assign({}, state, action.favoriteProductsIds)
        case MARK_FAVORITE_PRODUCT_BEGIN:
            return Object.assign({}, state, {
                markingFavoriteProduct: true
            })
        case MARK_FAVORITE_PRODUCT_END:
            return Object.assign({}, state, {
                markingFavoriteProduct: false
            })
        default:
            return state
    }
}