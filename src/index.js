import React from 'react';
import ReactDOM from 'react-dom';
// import App from './app/App';
import AllProducts from './all-products/AllProducts'
import ShoppingLists from './shopping-lists/ShoppingLists'
import ShoppingManager from './shopping-manager/ShoppingManager'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={ShoppingManager}>
            <Route path="/all-products" component={AllProducts} />
            <Route path="/shopping-lists" component={ShoppingLists} />
        </Route>
    </Router>,
    document.getElementById('root')
);
