import React, {Component} from 'react';
import './App.css';

import { Link } from 'react-router'

class App extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to={`/all-products`}>Wybór produktów</Link></li>
                    <li><Link to={`/shopping-lists`}>Twoje listy zakupów</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

export default App;
