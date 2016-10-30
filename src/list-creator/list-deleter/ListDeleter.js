import React from 'react'
import { NavItem, Nav } from 'react-bootstrap'
import { connect } from 'react-redux'
import { deleteList, updateExternalShoppingLists }from '../actionCreators'
import {browserHistory} from 'react-router'

const mapStateToProps = (state) => ({
    shoppingLists: state.listCreator.shoppingLists
})

const mapDispatchToProps = (dispatch) => ({
    deleteList: (listId) => dispatch(deleteList(listId)),
    updateExternalShoppingLists: (shoppingLists) => dispatch(updateExternalShoppingLists(shoppingLists))
})

class ListDeleter extends React.Component {

    handleSelect(eventKey) {
        event.preventDefault();
        browserHistory.push(eventKey);
    }

    render() {
        const {
            deleteList,
            listId,
            shoppingLists,
            updateExternalShoppingLists
        } = this.props

        const handleDelete = (listId) => {
            deleteList(listId);
            updateLists();
        }

        const updateLists = () => {
            console.log(shoppingLists)
            updateExternalShoppingLists(shoppingLists);
        }

        return (
            <Nav
                onSelect={this.handleSelect}
                bsStyle="pills">
                <NavItem
                    onClick={() => handleDelete(listId)}
                    eventKey="/shopping-lists">
                        USUŃ LISTĘ
                </NavItem>
            </Nav>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListDeleter)