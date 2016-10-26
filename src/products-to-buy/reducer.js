import {
    MARK_PRODUCT_AS_PURCHASED,
    RESET_PURCHASED
} from './actionTypes'

const initialState = {
    purchasedProductsIds: []
}

export default (state = initialState, action) => {

    switch (action.type) {

        case MARK_PRODUCT_AS_PURCHASED:
            return Object.assign({}, state, {
                purchasedProductsIds: state.purchasedProductsIds.concat([action.productId]),
            })
        case RESET_PURCHASED:
            return Object.assign({}, state, {
                purchasedProductsIds: []
            })
        default:
            return state
    }
}