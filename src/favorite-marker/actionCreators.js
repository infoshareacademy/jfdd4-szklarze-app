import { MARK_FAVORITE_PRODUCT } from './actionTypes'
import fetch from 'isomorphic-fetch'


// export function markFavoriteProduct(productId) {
//     return {
//         type: MARK_FAVORITE_PRODUCT,
//         productId: productId
//     }
// }

export function markFavoriteProduct(productId) {
    return function () {
        return fetch(
            'http://rest.learncode.academy/jfdd4-szklarze-app-janusz/users',
            {
                method: 'PUT',
                body: JSON.stringify({
                        productId: productId,
                })
        })
            // .then(response => response.json())
            // .then(favorites => {
            //     dispatch(fetchFavorites())
            // })
    }
}