import { combineReducers, createStore, compose, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import filterReducer from  './filters/reducer'
import listCreatorReducer from './list-creator/reducer'
import productsReducer from './data/products/reducer'
import favoritesReducer from './favorite-marker/reducer'
import purchasesReducer from './products-to-buy/reducer'
import counterReducer from './all-products/reducer'
import listNameEditorReducer from './list-creator/list-name-editor/reducer'

let reducer = combineReducers({
    products: productsReducer,
    filters: filterReducer,
    listCreator: listCreatorReducer,
    favorites: favoritesReducer,
    purchases: purchasesReducer,
    allProductsCounter: counterReducer,
    listNameEditor: listNameEditorReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(
            thunkMiddleware, // lets us dispatch() functions
        )
    )
)

export default store