import {
    MARK_FAVORITE_PRODUCT_BEGIN,
    MARK_FAVORITE_PRODUCT_END,
    RECEIVE_FAVORITES
} from './actionTypes'

const initialState = {
    favoriteProductsIds: [],
    markingFavoriteProduct: false
}

export default (state = initialState, action) => {

    switch (action.type) {
        case RECEIVE_FAVORITES:
            return Object.assign({}, state, action.favoriteProductsIds)
        case MARK_FAVORITE_PRODUCT_BEGIN:
            return Object.assign({}, state, {
                markingFavoriteProduct: true
            })
        case MARK_FAVORITE_PRODUCT_END:
            return Object.assign({}, state, {
                markingFavoriteProduct: false
            })
        default:
            return state
    }
}

// const initialState = {
//     favoriteProductIds:
//         typeof localStorage.getItem('favoriteProductIds') !== 'undefined' &&
//         localStorage.getItem('favoriteProductIds') !== null ?
//             JSON.parse(localStorage.getItem('favoriteProductIds')) :
//             []
// }
//
// export default (state = initialState, action) => {
//     let productIds = state.favoriteProductIds,
//         favoriteProductIds = productIds.indexOf(action.productId) === -1 ?
//             productIds.concat([action.productId]) :
//             productIds.filter((id) => id !== action.productId);
//
//     switch (action.type) {
//         case MARK_FAVORITE_PRODUCT:
//             store.subscribe(() => {
//                 localStorage
//                     .setItem(
//                         'favoriteProductIds',
//                         JSON.stringify(
//                             store.getState().favorites.favoriteProductIds || []
//                         )
//                     )
//             })
//             return Object.assign({}, state, {
//                 favoriteProductIds: favoriteProductIds
//             })
//         default:
//             return state
//     }
// }