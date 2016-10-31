import React from 'react'
import { saveNewList, setCurrentListName, updateExternalShoppingLists } from './actionCreators'
import { connect } from 'react-redux'
import { MenuItem } from 'react-bootstrap'
import {browserHistory} from 'react-router'
import './ListCreator.css'

const mapStateToProps = (state) => ({
    itemsToBuy: state.allProductsCounter.itemsToBuy,
    currentListName: state.listCreator.currentListName,
    shoppingLists: state.listCreator.shoppingLists
})

const mapDispatchToProps = (dispatch) => ({
    saveNewList: (itemsToBuy) =>
        dispatch(saveNewList(itemsToBuy)),
    setCurrentListName: (listName) => dispatch(setCurrentListName(listName)),
    updateExternalShoppingLists: () => dispatch(updateExternalShoppingLists())
})

class ListCreator extends React.Component {

    render() {

        const {
            saveNewList,
            setCurrentListName,
            itemsToBuy,
            currentListName,
            shoppingLists,
            updateExternalShoppingLists
        } = this.props

        const handleSelect = (eventKey) => {
            event.preventDefault();
            browserHistory.push(eventKey);
            updateExternalShoppingLists()
        }

        return (
            <div className="list-creator">
                <input
                    onChange={(event) => setCurrentListName(event.target.value)}
                    value={currentListName}
                    placeholder="Wpisz nazwę listy..."
                />
                <MenuItem
                    onClick={() =>
                        itemsToBuy.length === 0 ?
                            alert('Wybierz produkt, aby stworzyć listę') :
                            saveNewList(itemsToBuy, currentListName, shoppingLists)}
                    eventKey="/shopping-lists"
                    onSelect={
                        itemsToBuy.length === 0 ?
                            null :
                            handleSelect}>
                    Stwórz nową listę
                </MenuItem>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCreator)