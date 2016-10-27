import React from 'react'
import TiEdit from 'react-icons/lib/ti/edit'
import './ListNameEditor.css'
import {
    Modal,
    Form,
    FormGroup,
    ControlLabel,
    FormControl,
    Button
} from 'react-bootstrap'
import { openEditField, hideEditField, updateListName} from './actionCreators'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    isEditFieldActive: true

})

const mapDispatchToProps = (dispatch) => ({
    openEditField: () => dispatch(openEditField()),
    hideEditField: () => dispatch(hideEditField()),
    updateListName: (newListName) => dispatch(updateListName(newListName))
})

function printListName(list, listId) {
    const listNumber = Number(listId) + 1;
    return typeof list[list.length - 1] !== 'object' ?
        list[list.length - 1] :
    'Lista zakupów nr ' + listNumber
}

const ListNameEditor = ({
    list,
    listId,
    openEditField,
    hideEditField,
    updateListName,
    isEditFieldActive,
    ...props
}) => (

    <div className="list-name-container">
        <h4>{printListName(list, listId)}</h4>
        <button
            className="list-name-edit-button"
            title="Edytuj nazwę listy..."
            onClick={openEditField}>
            <TiEdit />
        </button>

        <Modal show={isEditFieldActive} onHide={hideEditField}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form inline>
                    <FormGroup controlId="newListName">
                        <ControlLabel>Nowa nazwa listy</ControlLabel>
                        {' '}
                        <FormControl type="text" placeholder="Moja nowa lista" />
                    </FormGroup>
                    {' '}
                    <Button onClick={updateListName}>
                        Zapisz
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>

    </div>
)

export default connect(mapStateToProps,mapDispatchToProps)(ListNameEditor)



