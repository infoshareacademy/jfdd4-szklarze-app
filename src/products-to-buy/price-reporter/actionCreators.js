import { OPEN_PRICE_REPORT_FIELD, HIDE_PRICE_REPORT_FIELD, UPDATE_PRICE_MARKER} from './actionTypes'


export function openPriceReportField (productId, purchaseDate, productName) {
    return {
        type: OPEN_PRICE_REPORT_FIELD,
        productId: productId,
        purchaseDate: purchaseDate,
        productName: productName
    }
}

export function hidePriceReportField () {
    return {
        type: HIDE_PRICE_REPORT_FIELD
    }
}

export function updatePriceMarker(reportedPrice) {
    return {
        type: UPDATE_PRICE_MARKER,
        reportedPrice: reportedPrice
    }

}

