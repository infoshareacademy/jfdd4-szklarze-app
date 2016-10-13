import React, {Component} from 'react';
import './App.css';

import { Link } from 'react-router'

class App extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to={`/shopping-manager`}>Planer zakupowy</Link></li>
                    {/*Ten komponent zostanie wykorzystany, jeżeli pojawią się kolejne
                     funkcjonalności aplikacji (mapa, kalendarz itd.)*/}
                </ul>
                {this.props.children}
            </div>
        );
    }
}

export default App;
