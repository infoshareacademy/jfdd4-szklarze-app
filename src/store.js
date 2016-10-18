import { combineReducers, createStore, compose } from 'redux'
import productsReducer from './all-products/reducer'

let reducer = combineReducers({
    products: productsReducer
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store