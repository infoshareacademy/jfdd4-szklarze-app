import { MARK_FAVORITE_PRODUCT } from './actionTypes'

const initialState = {
    favoriteProductIds: [] || JSON.parse(localStorage.getItem('favoriteProductIds'))
}

export default (state = initialState, action) => {
    let productIds = state.favoriteProductIds;
    switch (action.type) {
        case MARK_FAVORITE_PRODUCT:
            return Object.assign({}, state, {
                favoriteProductIds:
                    productIds.indexOf(action.productId) === -1 ?
                        productIds.concat([action.productId]) :
                        productIds.filter((id) => id !== action.productId)
            })
        default:
            return state
    }
}