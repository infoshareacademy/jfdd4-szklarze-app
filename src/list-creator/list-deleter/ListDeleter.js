import React from 'react'
import { NavItem, Nav } from 'react-bootstrap'
import { connect } from 'react-redux'
import { deleteList }from '../actionCreators'
import {browserHistory} from 'react-router'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    deleteList: (listId) => dispatch(deleteList(listId))
})

class ListDeleter extends React.Component {

    handleSelect(eventKey) {
        event.preventDefault();
        browserHistory.push(eventKey);
    }

    render() {
        const {
            deleteList,
            listId
        } = this.props

        return (
            <Nav
                onSelect={this.handleSelect}
                bsStyle="pills">
                <NavItem
                    onClick={() => deleteList(listId)}
                    eventKey="/shopping-lists">
                        USUŃ LISTĘ
                </NavItem>
            </Nav>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListDeleter)