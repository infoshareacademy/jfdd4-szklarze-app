import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AllProducts from './shopping-manager/all-products/AllProducts'
import ShoppingLists from './shopping-manager/shopping-lists/ShoppingLists'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/all-products" component={AllProducts} />
            <Route path="/shopping-lists" component={ShoppingLists} />
        </Route>
    </Router>,
    document.getElementById('root')
);
