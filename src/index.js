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
import Chart from './chart/Chart'

import { fetchFavorites, updateExternalFavorites } from './favorite-marker/actionCreators'
import { fetchShoppingLists, updateExternalShoppingLists } from './list-creator/actionCreators'
import { fetchProducts } from './data/products/actionCreators'
import { fetchPriceMarkers } from  './map/actionCreators'

function handleEnter() {
    store.dispatch(fetchFavorites())
    store.dispatch(fetchShoppingLists())
    store.dispatch(fetchProducts())
    store.dispatch(fetchPrices())
}

function updateFavorites() {
    store.dispatch(updateExternalFavorites(store.getState()
        .favorites.favoriteProductsIds))
}

function updateShoppingLists() {
    store.dispatch(updateExternalShoppingLists(store.getState()
        .listCreator.shoppingLists))
}

let priceReceiverAllProducts;

function handleAllProductsEnter() {
    priceReceiverAllProducts = setInterval(() => store.dispatch(fetchPrices()), 2000);
}

function handleAllProductsLeave() {
    clearInterval(priceReceiverAllProducts);
    updateFavorites();
}

let priceReceiverShoppingList;

function handleShoppingListEnter() {
    priceReceiverShoppingList = setInterval(() => store.dispatch(fetchPrices()), 2000);
}

function handleShoppingListLeave() {
    updateShoppingLists();
    clearInterval(priceReceiverShoppingList);
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
                    onEnter={() => handleAllProductsEnter()}
                    onLeave={() => handleAllProductsLeave()}/>
                <Route path="/shopping-lists"
                       component={ShoppingLists}>
                    <Route
                        path="/shopping-lists/:listId"
                        component={ProductsToBuy}
                        onEnter={() => handleShoppingListEnter()}
                        onLeave={() => handleShoppingListLeave()}/>
                    <Route path="*" component={Introduction}/>
                </Route>
                <Route path="/chart" component={Chart}/>
                <Route path="/map"
                       component={Map}
                       onEnter={() => store.dispatch(fetchPriceMarkers())}/>
                <Route path="*" component={Introduction}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
