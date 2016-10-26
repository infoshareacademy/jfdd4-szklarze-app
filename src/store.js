import { combineReducers, createStore} from 'redux'
import filterReducer from  './filters/reducer'
import allProductsReducer from './list-creator/reducer'
import productsReducer from './data/products/reducer'
import favoritesReducer from './favorite-marker/reducer'
import purchasesReducer from './products-to-buy/reducer'
import counterReducer from './all-products/reducer'

let reducer = combineReducers({
    products: productsReducer,
    filters: filterReducer,
    allProducts: allProductsReducer,
    favorites: favoritesReducer,
    purchases: purchasesReducer,
    itemsToBuy: counterReducer
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store