import { combineReducers, createStore } from 'redux'
import allProductsReducer from './all-products/reducer'

let reducer = combineReducers({
    allProducts: allProductsReducer,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store