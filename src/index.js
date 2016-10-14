import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import AllProducts from './all-products/AllProducts'
import ShoppingLists from './shopping-lists/ShoppingLists'
import Introduction from './introduction/Introduction'
import ProductsToBuy from './products-to-buy/ProductsToBuy'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { Router, Route, browserHistory, IndexRoute } from 'react-router'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Introduction}/>
            <Route path="/all-products" component={AllProducts} />
            <Route path="/shopping-lists" component={ShoppingLists}>
                <Route path="/shopping-lists/:listId" component={ProductsToBuy}/>
            </Route>
        </Route>
    </Router>,
    document.getElementById('root')
);
