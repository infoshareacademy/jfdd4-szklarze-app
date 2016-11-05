import {
    OPEN_PRICE_REPORT_FIELD,
    HIDE_PRICE_REPORT_FIELD
} from './actionTypes'

const initialState = {
    isPriceReportFieldActive: false,
    activeProduct: '',
    purchaseDate: '',
    productName: ''
}

export default (state=initialState, action) => {
    switch (action.type) {
        case OPEN_PRICE_REPORT_FIELD:
            return Object.assign({}, state, {
                isPriceReportFieldActive: true,
                activeProduct: action.productId,
                purchaseDate: action.purchaseDate,
                productName: action.productName
            })
        case HIDE_PRICE_REPORT_FIELD:
            return Object.assign({}, state, {
                isPriceReportFieldActive: false
            })
        default:
            return state
    }
}
