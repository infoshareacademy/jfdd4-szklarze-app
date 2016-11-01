import { RECEIVE_PRODUCTS, REQUEST_PRODUCTS } from './actionTypes'

function requestProducts() {
    return {
        type: REQUEST_PRODUCTS
    }
}

function receiveProducts(products) {
    return {
        type: RECEIVE_PRODUCTS,
        products: products
    }
}

export function fetchProducts() {

    return function (dispatch) {
        dispatch(requestProducts())
        return fetch('https://jfdd4-szklarze-app-janusz.herokuapp.com/api/products')
            .then(response => response.json())
            .then(products => dispatch(receiveProducts(products)))
    }
}