import { RECEIVE_PRICES } from './actionTypes'

const initialState = {
    prices: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PRICES:
            return {...state, prices: action.prices}
        default:
            return state
    }
}