import { RECEIVE_PRICE_MARKERS } from './actionTypes'


const initialState = {
    priceMarkers: []
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case RECEIVE_PRICE_MARKERS:
            return Object.assign({}, state, {
                priceMarkers: action.priceMarkers
        })
        default:
            return state
    }
}