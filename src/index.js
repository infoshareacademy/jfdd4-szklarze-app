import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux';
import store from './store';
import AllProducts from './all-products/AllProducts'
import ShoppingLists from './shopping-lists/ShoppingLists'
import Introduction from './introduction/Introduction'
import ProductsToBuy from './products-to-buy/ProductsToBuy'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Introduction}/>
                <Route path="/products-to-buy" component={ProductsToBuy} />
                <Route path="/all-products" component={AllProducts} />
                <Route path="/shopping-lists" component={ShoppingLists}>
                    <Route path="/shopping-lists/:listId" component={ProductsToBuy}/>
                </Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
