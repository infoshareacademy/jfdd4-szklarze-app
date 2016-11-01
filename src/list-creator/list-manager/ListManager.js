import React from 'react'
import { NavItem, Nav } from 'react-bootstrap'
import FaClone from 'react-icons/lib/fa/clone'
import FaClose from 'react-icons/lib/fa/close'
import { connect } from 'react-redux'
import { updateExternalShoppingLists } from '../actionCreators'
import { deleteList, cloneList }from './actionCreators'
import {browserHistory} from 'react-router'
import './ListManager.css'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    deleteList: (listId) => dispatch(deleteList(listId)),
    cloneList: (listId) => dispatch(cloneList(listId)),
    updateExternalShoppingLists: () => dispatch(updateExternalShoppingLists())
})

class ListManager extends React.Component {

    handleSelect(eventKey) {
        event.preventDefault();
        browserHistory.push(eventKey);
    }

    render() {
        const {
            deleteList,
            listId,
            updateExternalShoppingLists,
            cloneList
        } = this.props

        const handleDelete = (listId) => {
            deleteList(listId);
            updateExternalShoppingLists();
        }

        const handleClone = (listId) => {
            cloneList(listId);
            updateExternalShoppingLists();
        }

        return (
            <Nav
                onSelect={this.handleSelect}
                bsStyle="pills">
                    <NavItem
                        onClick={() => handleClone(listId)}
                        eventKey={"/shopping-lists/"+listId}
                        title="Kopiuj listę...">
                            <FaClone />
                    </NavItem>
                    <NavItem
                        onClick={() => handleDelete(listId)}
                        eventKey="/shopping-lists"
                        title="Usuń listę...">
                            <FaClose />
                    </NavItem>
            </Nav>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListManager)
