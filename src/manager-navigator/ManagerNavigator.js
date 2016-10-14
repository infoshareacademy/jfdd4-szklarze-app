import React from 'react'
import {Nav, NavItem} from 'react-bootstrap'
import {browserHistory} from 'react-router'

export default class ManagerNavigator extends React.Component {

    handleSelect(eventKey) {
        event.preventDefault();
        browserHistory.push(eventKey);
    }

    render() {
        return (
            <Nav bsStyle="tabs" onSelect={this.handleSelect}>
                <NavItem eventKey="/">Start</NavItem>
                <NavItem eventKey="/all-products">Produkty</NavItem>
                <NavItem eventKey="/shopping-lists">Listy zakupów</NavItem>
            </Nav>
        )
    }
}
