import {
    OPEN_PRICE_REPORT_FIELD,
    HIDE_PRICE_REPORT_FIELD,
    UPDATE_PRICE_MARKER,
    UPDATE_EXTERNAL_PRICE_MARKER_BEGIN,
    UPDATE_EXTERNAL_PRICE_MARKER_END
} from './actionTypes'
import fetch from 'isomorphic-fetch'
import store from './../../store'

export function openPriceReportField(productId, purchaseDate, productName) {
    return {
        type: OPEN_PRICE_REPORT_FIELD,
        productId: productId,
        purchaseDate: purchaseDate,
        productName: productName
    }
}

export function hidePriceReportField() {
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

function updateExternalPriceMarkerBegin() {
    return {
        type: UPDATE_EXTERNAL_PRICE_MARKER_BEGIN
    }
}

function updateExternalPriceMarkerEnd() {
    return {
        type: UPDATE_EXTERNAL_PRICE_MARKER_END
    }
}

export function updateExternalPriceMarkers() {

    const state = store.getState();
    const priceMarker = state.priceReporting;

    return function (dispatch) {
        dispatch(updateExternalPriceMarkerBegin())
        return fetch('https://jfdd4-szklarze-app-janusz.herokuapp.com/api/price-markers', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                productId: priceMarker.activeProduct,
                price: priceMarker.reportedPrice,
                date: priceMarker.purchaseDate

            })
        })
                .then(response => response.json())
                .then(priceMarker => {
                    dispatch(updateExternalPriceMarkerEnd())

        })
    }
}

