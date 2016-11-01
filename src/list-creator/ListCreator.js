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
                <div className="budget-panel">
                    <div className="sum">Suma: 28.90 zł</div>
                    <div className="budget-indicator">:-)</div>
                    <div className="message">Stać cię na zakupy!</div>
                </div>

                <div className="form-field create-budget">
                    <input
                        placeholder="Podaj swój budżet..."
                    />
                    <MenuItem>
                        Zapisz budżet
                    </MenuItem>
                </div>

                <div className="form-field crate-list">
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
                        Stwórz listę
                    </MenuItem>
                </div>

            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCreator)