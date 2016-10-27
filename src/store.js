import { combineReducers, createStore} from 'redux'
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

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store