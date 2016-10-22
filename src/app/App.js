import React, {Component} from 'react';
import './App.css';

import ManagerNavigator from '../manager-navigator/ManagerNavigator'

class App extends Component {
    render() {
        return (
            <div>
                <ManagerNavigator/>
                {this.props.children}
            </div>
        );
    }
}

export default App;