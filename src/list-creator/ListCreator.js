import React from 'react'
import { saveNewList, setCurrentListName } from './actionCreators'
import { connect } from 'react-redux'
import { MenuItem } from 'react-bootstrap'
import {browserHistory} from 'react-router'

const mapStateToProps = (state) => ({
    itemsToBuy: state.allProducts.itemsToBuy,
    currentListName: state.allProducts.currentListName
})

const mapDispatchToProps = (dispatch) => ({
    saveNewList: () => dispatch(saveNewList()),
    setCurrentListName: (listName) => dispatch(setCurrentListName(listName))
})

class ListCreator extends React.Component {

    handleSelect(eventKey) {
        event.preventDefault();
        browserHistory.push(eventKey);
    }

    render() {
        const {
            saveNewList,
            setCurrentListName,
            itemsToBuy,
            currentListName
        } = this.props
        return (
            <div>
                <input
                    onChange={(event) => setCurrentListName(event.target.value)}
                    value={currentListName}
                    placeholder="Wpisz nazwę listy..."
                />
                <MenuItem
                    bsClass="create-new-list-button"
                    onClick={() =>
                        itemsToBuy.length === 0 ?
                            alert('Wybierz produkt, aby stworzyć listę') :
                            saveNewList()}
                    eventKey="/shopping-lists"
                    onSelect={
                        itemsToBuy.length === 0 ?
                            '' :
                            this.handleSelect}>
                    Stwórz nową listę
                </MenuItem>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCreator)