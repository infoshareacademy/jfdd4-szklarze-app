import {
    MARK_FAVORITE_PRODUCT_BEGIN,
    MARK_FAVORITE_PRODUCT_END,
    REQUEST_FAVORITES,
    RECEIVE_FAVORITES
} from './actionTypes'
import fetch from 'isomorphic-fetch'

function markFavoriteProductBegin() {
    return {
        type: MARK_FAVORITE_PRODUCT_BEGIN
    }
}

function markFavoriteProductEnd() {
    return {
        type: MARK_FAVORITE_PRODUCT_END
    }
}

// import { MARK_FAVORITE_PRODUCT } from './actionTypes'
//
// export function markFavoriteProduct(productId) {
//     return {
//         type: MARK_FAVORITE_PRODUCT,
//         productId: productId
//     }
// }

export function markFavoriteProduct(productId, oldFavoriteProductIds) {

    let newFavoriteProductIds = oldFavoriteProductIds.indexOf(productId) === -1 ?
            oldFavoriteProductIds.concat([productId]) :
            oldFavoriteProductIds.filter((id) => id !== productId);

    return function (dispatch) {

        dispatch(markFavoriteProductBegin())
        return fetch('https://jfdd4-szklarze-app-janusz.herokuapp.com/api/users', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                favoriteProductsIds: newFavoriteProductIds,
                id: 5 //TODO: this is static user id, change it when logging with SM is
                // provided
            })
        })
            .then(response => response.json())
            .then(favorites => {
                dispatch(markFavoriteProductEnd())
                dispatch(fetchFavorites())
            })
    }
}

function requestFavorites() {
    return {
        type: REQUEST_FAVORITES
    }
}

function receiveFavorites(favoriteProductsIds) {
    return {
        type: RECEIVE_FAVORITES,
        favoriteProductsIds: favoriteProductsIds
    }
}

export function fetchFavorites() {

    let userId = 5 //TODO: static user id, change it when logging with SM is provided

    return function (dispatch) {
        dispatch(requestFavorites())
        return fetch('https://jfdd4-szklarze-app-janusz.herokuapp.com/api/users/'+userId+
            '?filter[fields][favoriteProductsIds]=true')
            .then(response => response.json())
            .then(favoriteProductsIds => dispatch(receiveFavorites(favoriteProductsIds)))
    }
}
