import {
    MARK_PRODUCT_AS_PURCHASED,
    SHOW_PRODUCT_PRICES_TREND,
    RECEIVE_PRICES
} from './actionTypes'

export function markProductAsPurchased(productId, listId) {
    return{
        type: MARK_PRODUCT_AS_PURCHASED,
        productId: productId,
        listId: listId
    }
}

export function showProductPricesTrend(productId) {
    return{
        type: SHOW_PRODUCT_PRICES_TREND,
        productId: productId,
    }
}
import fetch from 'isomorphic-fetch'

export function fetchPrices() {
    return function (dispatch) {
        return fetch('https://jfdd4-szklarze-app-janusz.herokuapp.com/api/price-markers/?filter[fields][price]=true&filter[fields][productId]=true&filter[fields][date]=true')
            .then(response => response.json())
            .then(prices => dispatch({
                type: RECEIVE_PRICES,
                prices: prices
            }))
    }
}
