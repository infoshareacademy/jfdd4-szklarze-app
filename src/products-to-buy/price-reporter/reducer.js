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
        case UPDATE_PRICE_MARKER:
            return Object.assign({}, state, {
                reportedPrice: action.reportedPrice
            })
        case GET_COORDINATES:
            const bla = navigator.geolocation.getCurrentPosition(position => position.coords.latitude),
                    ble = navigator.geolocation.getCurrentPosition(position => position.coords.longitude)
            return Object.assign({}, state, {
                    lat: bla,
                    lng: ble
                })
        default:
            return state
    }
}
