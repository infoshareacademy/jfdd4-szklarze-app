import { combineReducers, createStore} from 'redux'
import productsReducer from './all-products/reducer'
import filterReducer from  './filters/reducer'
import allProductsReducer from './all-products/reducer'

let reducer = combineReducers({
    products: productsReducer,
    filters: filterReducer
    allProducts: allProductsReducer
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store