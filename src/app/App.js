import React, {Component} from 'react';
import './App.css';

import ShoppingManager from '../shopping-manager/ShoppingManager'

class App extends Component {
    render() {
        return (
            <div>
                <ShoppingManager/>
                {this.props.children}
            </div>
        );
    }
}

export default App;
