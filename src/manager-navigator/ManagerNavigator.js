import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {browserHistory} from 'react-router'

export default class ManagerNavigator extends React.Component {

    handleSelect(eventKey) {
        event.preventDefault();
        browserHistory.push(eventKey);
    }

    render() {
        return (
        <Navbar inverse>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">Janusz</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav onSelect={this.handleSelect}>
                    <NavItem eventKey="/all-products">Stwórz listę</NavItem>
                    <NavItem eventKey="/shopping-lists">Twoje listy zakupów</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}
