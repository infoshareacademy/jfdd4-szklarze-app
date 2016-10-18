import { combineReducers, createStore, compose } from 'redux'


let reducer = combineReducers({

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    reducer,
    composeEnhancers);

export default store