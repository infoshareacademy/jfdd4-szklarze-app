import { combineReducers, createStore } from 'redux'
import allProductsReducer from './all-products/reducer'
import allProductsItemReducer from './all-products/all-products-item/reducer'

let reducer = combineReducers({
    allProducts: allProductsReducer,
    allProductsItem: allProductsItemReducer
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store