import {
    MARK_PRODUCT_AS_PURCHASED,
    RECEIVE_PRICES
} from './actionTypes'

export function markProductAsPurchased(productId, listId) {
    return{
        type: MARK_PRODUCT_AS_PURCHASED,
        productId: productId,
        listId: listId
    }
}

import { REQUEST_NOTES, RECEIVE_NOTES } from './actionTypes'

import fetch from 'isomorphic-fetch'

export function fetchPrices(productId) {
    return function (dispatch) {
        return fetch('https://jfdd4-szklarze-app-janusz.herokuapp.com/api/price-markers/?filter[where][productId]=' + productId +'&filter[fields][price]=true')
            .then(response => response.json())
            .then(prices => dispatch({
                type: RECEIVE_PRICES,
                prices: prices
            }))
    }
}
