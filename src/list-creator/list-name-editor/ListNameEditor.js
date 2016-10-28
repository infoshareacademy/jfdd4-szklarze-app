import React from 'react'
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
    storeNewListName
} from './actionCreators'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    isEditFieldActive: state.listNameEditor.isEditFieldActive,
    newListName: state.listNameEditor.changedListName
})

const mapDispatchToProps = (dispatch) => ({
    openEditField: () => dispatch(openEditField()),
    hideEditField: () => dispatch(hideEditField()),
    storeNewListName: (changedListName) => dispatch(storeNewListName(changedListName)),
    updateListName: (newListName, listId) => dispatch(updateListName(newListName, listId))
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
    storeNewListName,
    newListName
}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        updateListName(newListName, listId)
    }

    const handleChange = (event) => {
        storeNewListName(event.target.value)
    }

    return (

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
                            onChange={handleChange}
                        />
                    </FormGroup>
                    {' '}
                    <Button
                        type="submit"
                        disabled={newListName === ""}>
                        Zapisz
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>

    </div>
)}

export default connect(mapStateToProps,mapDispatchToProps)(ListNameEditor)



