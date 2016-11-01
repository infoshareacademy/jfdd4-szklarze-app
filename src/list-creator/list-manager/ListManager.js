import React from 'react'
import { NavItem, Nav, OverlayTrigger, Tooltip } from 'react-bootstrap'
import FaClone from 'react-icons/lib/fa/clone'
import FaClose from 'react-icons/lib/fa/close'
import { connect } from 'react-redux'
import { deleteList, updateExternalShoppingLists }from '../actionCreators'
import {browserHistory} from 'react-router'
import './ListManager.css'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    deleteList: (listId) => dispatch(deleteList(listId)),
    updateExternalShoppingLists: () => dispatch(updateExternalShoppingLists())
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
            updateExternalShoppingLists
        } = this.props

        const handleDelete = (listId) => {
            deleteList(listId);
            updateExternalShoppingLists();
        }

        const handleClone = (listId) => {
            updateExternalShoppingLists();
        }

        const tooltipDelete = (
            <Tooltip id="tooltip"><strong>Usuń listę</strong></Tooltip>
        );
        const tooltipClone = (
            <Tooltip id="tooltip">Kopiuj listę</Tooltip>
        );

        return (
            <Nav
                onSelect={this.handleSelect}
                bsStyle="pills">
                <OverlayTrigger placement="bottom" overlay={tooltipClone} delayShow={800}>
                    <NavItem
                        onClick={() => handleClone(listId)}
                        eventKey="/shopping-lists">
                            <FaClone />
                    </NavItem>
                </OverlayTrigger>
                <OverlayTrigger placement="bottom" overlay={tooltipDelete} delayShow={800}>
                    <NavItem
                        onClick={() => handleDelete(listId)}
                        eventKey="/shopping-lists">
                            <FaClose />
                    </NavItem>
                </OverlayTrigger>
            </Nav>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListDeleter)