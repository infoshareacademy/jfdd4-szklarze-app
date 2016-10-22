import { combineReducers, createStore} from 'redux'
import filterReducer from  './filters/reducer'
import allProductsReducer from './all-products/reducer'
import productsReducer from './data/products/reducer'
import favoritesReducer from './favorite-marker/reducer'

let reducer = combineReducers({
    products: productsReducer,
    filters: filterReducer,
    allProducts: allProductsReducer,
    favorites: favoritesReducer
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store