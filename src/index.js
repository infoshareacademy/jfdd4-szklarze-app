import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Products from './products/Products'
import './index.css';

import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/products" component={Products} />
        </Route>
    </Router>,
    document.getElementById('root')
);
