import React, {Component} from 'react';
import './App.css';

import { Link } from 'react-router'

class App extends Component {
    render() {
        return (
            <div>
                <p>
                    <Link to={`/products`}>Products</Link>
                </p>
                {this.props.children}
            </div>
        );
    }
}

export default App;
