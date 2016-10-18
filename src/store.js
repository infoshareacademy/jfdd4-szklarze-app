import { combineReducers, createStore, compose } from 'redux'


let reducer = combineReducers({

});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store