import React from 'react'
import { saveNewList, setCurrentListName } from './actionCreators'
import { connect } from 'react-redux'
import { MenuItem } from 'react-bootstrap'
import {browserHistory} from 'react-router'
import './ListCreator.css'

const mapStateToProps = (state) => ({
    itemsToBuy: state.allProductsCounter.itemsToBuy,
    currentListName: state.listCreator.currentListName
})

const mapDispatchToProps = (dispatch) => ({
    saveNewList: (itemsToBuy) => dispatch(saveNewList(itemsToBuy)),
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
                            saveNewList(itemsToBuy)}
                    eventKey="/shopping-lists"
                    onSelect={
                        itemsToBuy.length === 0 ?
                            null :
                            this.handleSelect}>
                    Stwórz nową listę
                </MenuItem>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCreator)