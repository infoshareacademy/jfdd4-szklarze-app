import {
    INCREASE_AMOUNT,
    DECREASE_AMOUNT
} from './actionTypes'
import fetch from 'isomorphic-fetch'

export function increaseAmount(productId, price) {
    return {
        type: INCREASE_AMOUNT,
        productId: productId,
        price: price
    }
}

export function decreaseAmount(productId, price) {
    return {
        type: DECREASE_AMOUNT,
        productId: productId,
        price: price
    }
}

export function addPriceMarker(price, productId){

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    let minPrice = 0.8 * price,
        maxPrice = 1.2 * price;

    return fetch('https://jfdd4-szklarze-app-janusz.herokuapp.com/api/users', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "productId": productId,
                "price": getRandomArbitrary(minPrice,maxPrice),
                "shopPosition": {
                    "lat": getRandomArbitrary(54.313972, 54.382409),
                    "lng": getRandomArbitrary(18.576980, 18.707786)
                },
                "date": "2016-10-29T14:25:36.000Z",
                "userId": 5,
            })
        })
}