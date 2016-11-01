import {
    MARK_FAVORITE_PRODUCT,
    REQUEST_FAVORITES,
    RECEIVE_FAVORITES,
    UPDATE_EXTERNAL_FAVORITES_BEGIN,
    UPDATE_EXTERNAL_FAVORITES_END
} from './actionTypes'
import fetch from 'isomorphic-fetch'

export function markFavoriteProduct(productId) {
    return {
        type: MARK_FAVORITE_PRODUCT,
        productId: productId
    }
}

function updateExternalFavoritesBegin() {
    return {
        type: UPDATE_EXTERNAL_FAVORITES_BEGIN
    }
}

function updateExternalFavoritesEnd() {
    return {
        type: UPDATE_EXTERNAL_FAVORITES_END
    }
}

export function updateExternalFavorites(favorites) {

    return function (dispatch) {

        dispatch(updateExternalFavoritesBegin())
        return fetch('https://jfdd4-szklarze-app-janusz.herokuapp.com/api/users', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                favoriteProductsIds: favorites,
                id: 5 //TODO: this is static user id, change it when logging with SM is
                // provided
            })
        })
            .then(response => response.json())
            .then(favorites => {
                dispatch(updateExternalFavoritesEnd())
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