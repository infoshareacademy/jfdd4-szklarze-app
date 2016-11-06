import {
    OPEN_PRICE_REPORT_FIELD,
    HIDE_PRICE_REPORT_FIELD,
    UPDATE_PRICE_MARKER,
    GET_COORDINATES
} from './actionTypes'

const initialState = {
    isPriceReportFieldActive: false,
    activeProduct: '',
    purchaseDate: '',
    productName: '',
    reportedPrice: '',
    lat: '',
    lng: ''
}

var moment = require('moment');

export default (state=initialState, action) => {
    switch (action.type) {

        case OPEN_PRICE_REPORT_FIELD:
            return Object.assign({}, state, {
                isPriceReportFieldActive: true,
                activeProduct: action.productId,
                purchaseDate: moment(action.purchaseDate).lang("pl").format('l'),
                productName: action.productName
            })
        case HIDE_PRICE_REPORT_FIELD:
            return Object.assign({}, state, {
                isPriceReportFieldActive: false
            })
        case UPDATE_PRICE_MARKER:
            return Object.assign({}, state, {
                reportedPrice: action.reportedPrice
            })
        case GET_COORDINATES:
            return Object.assign({}, state, {
                    lat: action.lat,
                    lng: action.lng
                })
        default:
            return state
    }
}
