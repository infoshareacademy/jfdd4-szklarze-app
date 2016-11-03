import { RECEIVE_PRICES, SHOW_PRODUCT_PRICES_TREND } from './actionTypes'

const initialState = {
    prices: [],
    activeProduct: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PRICES:
            return {...state, prices: action.prices};
        case SHOW_PRODUCT_PRICES_TREND:
            return {...state, activeProduct: action.productId};
        default:
            return state
    }
}