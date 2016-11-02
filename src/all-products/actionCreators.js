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

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let minPrice = 0.8 * price,
        maxPrice = 1.2 * price;

    return fetch('http://0.0.0.0:3010/api/price-markers', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "productId": productId,
                "price": getRandomArbitrary(minPrice,maxPrice).toFixed(2),
                "shopPosition": {
                    "lat": getRandomArbitrary(54.313972, 54.382409).toFixed(6),
                    "lng": getRandomArbitrary(18.576980, 18.707786).toFixed(6)
                },
                "date": "2016-10-"+
                getRandomInt(1, 31)+"T"+getRandomInt(6, 22)+":"+getRandomInt(1, 59)+":00.000Z",
                "userId": getRandomInt(1, 5),
            })
        }).then(response => addPriceMarker(price, productId))
}