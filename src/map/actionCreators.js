import { REQUEST_PRICE_MARKERS, RECEIVE_PRICE_MARKERS } from './actionTypes'

import fetch from 'isomorphic-fetch'

function requestPriceMarkers() {
    return {
        type: REQUEST_PRICE_MARKERS
    }
}

function receivePriceMarkers() {
    return{
        type: RECEIVE_PRICE_MARKERS
    }
}

export function fetchPriceMarkers() {
    return function (dispatch) {
        dispatch(requestPriceMarkers())
        return fetch('https://jfdd4-szklarze-app-janusz.herokuapp.com/api/price-markers')
            .then(response => response.json())
            .then(priceMarkers => dispatch(receivePriceMarkers(priceMarkers)
            ))
    }
}
