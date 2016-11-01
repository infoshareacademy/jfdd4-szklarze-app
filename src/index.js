import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import {Provider} from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import AllProducts from './all-products/AllProducts'
import ShoppingLists from './shopping-lists/ShoppingLists'
import Introduction from './introduction/Introduction'
import ProductsToBuy from './products-to-buy/ProductsToBuy'
import {fetchPrices} from './products-to-buy/actionCreators'
import Map from './map/Map'
import './index.css';

import { fetchFavorites, updateExternalFavorites } from './favorite-marker/actionCreators'
import { fetchShoppingLists } from './list-creator/actionCreators'
import { fetchProducts } from './data/products/actionCreators'

function handleEnter() {
    store.dispatch(fetchFavorites())
    store.dispatch(fetchShoppingLists())
    store.dispatch(fetchProducts())
}

function updateFavorites() {
    store.dispatch(updateExternalFavorites(store.getState()
        .favorites.favoriteProductsIds))
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/"
                   component={App}
                   onEnter={() => handleEnter()}>
                <IndexRoute component={Introduction}/>
                <Route
                    path="/all-products"
                    component={AllProducts}
                    onLeave={() => updateFavorites()}/>
                <Route path="/shopping-lists"
                       component={ShoppingLists}>
                    <Route
                        path="/shopping-lists/:listId"
                        component={ProductsToBuy} onEnter={() => store.dispatch(fetchPrices())}/>
                    <Route path="*" component={Introduction}/>
                </Route>
                <Route path="/map" component={Map}/>
                <Route path="*" component={Introduction}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
