import { RECEIVE_PRODUCTS } from './actionTypes'

const initialState = []

export default (state=initialState, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return state = action.products
        default:
            return state
    }
}