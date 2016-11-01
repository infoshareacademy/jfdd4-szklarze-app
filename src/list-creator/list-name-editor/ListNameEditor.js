import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import TiEdit from 'react-icons/lib/ti/edit'
import {
Modal,
Form,
FormGroup,
FormControl,
Button
} from 'react-bootstrap'
import './ListNameEditor.css'
import {
    openEditField,
    hideEditField,
    updateListName,
} from './actionCreators'
import { updateExternalShoppingLists }from '../actionCreators'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    isEditFieldActive: state.listNameEditor.isEditFieldActive,
})

const mapDispatchToProps = (dispatch) => ({
    openEditField: () => dispatch(openEditField()),
    hideEditField: () => dispatch(hideEditField()),
    updateListName: (newListName, listId) => dispatch(updateListName(newListName, listId)),
    updateExternalShoppingLists: () => dispatch(updateExternalShoppingLists())
})

function printListName(list, listId) {
    const listNumber = Number(listId) + 1;
    return typeof list[list.length - 1] !== 'object' && list[list.length - 1] !== '' ?
        list[list.length - 1] :
    'Lista zakupów nr ' + listNumber
}

class ListNameEditor extends React.Component {

    constructor () {
        super()

        this.state = {
            newListName: ''
        }
    }

    render() {

        const {
            list,
            listId,
            openEditField,
            hideEditField,
            updateListName,
            isEditFieldActive,
            updateExternalShoppingLists
        } = this.props

        const handleSubmit = (event) => {
            event.preventDefault();
            updateListName(this.state.newListName, listId);
            updateExternalShoppingLists();
        }

        return (

            <div className="list-name-container">
                <h6>{printListName(list, listId)}</h6>
                    <button
                        className="list-name-edit-button"
                        onClick={openEditField}
                        title="Edytuj nazwę listy...">
                        <TiEdit />
                    </button>
                <Modal show={isEditFieldActive} onHide={hideEditField}>
                    <Modal.Header closeButton>
                        <Modal.Title>Zmień nazwę listy...</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form
                            inline
                            onSubmit={handleSubmit}>
                            <FormGroup controlId="newListName">
                                <FormControl
                                    type="text"
                                    defaultValue={printListName(list, listId)}
                                    onChange={event => this.setState({
                                        newListName: event.target.value
                                    })}
                                />
                            </FormGroup>
                            {' '}
                            <Button
                                type="submit"
                                disabled={this.state.newListName === ""}
                                onClick={hideEditField}>
                                Zapisz
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>

            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListNameEditor)
