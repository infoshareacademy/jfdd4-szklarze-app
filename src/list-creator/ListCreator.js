import React from 'react'
import { saveNewList, updateExternalShoppingLists } from './actionCreators'
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
    saveNewList: (itemsToBuy, listName) =>
        dispatch(saveNewList(itemsToBuy, listName)),
    updateExternalShoppingLists: () => dispatch(updateExternalShoppingLists())
})

class ListCreator extends React.Component {

    constructor () {
        super();

        this.state = {
            listName: ''
        }
    }

    render() {

        const {
            saveNewList,
            itemsToBuy,
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
                    onChange={(event) => this.setState({
                        listName: event.target.value
                    })}
                    value={this.state.listName}
                    placeholder="Wpisz nazwę listy..."
                />
                <MenuItem
                    onClick={() =>
                        itemsToBuy.length === 0 ?
                            alert('Wybierz produkt, aby stworzyć listę') :
                            saveNewList(itemsToBuy, this.state.listName)}
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