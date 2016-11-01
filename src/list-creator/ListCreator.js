import React from 'react'
import { saveNewList, updateExternalShoppingLists } from './actionCreators'
import { connect } from 'react-redux'
import { MenuItem } from 'react-bootstrap'
import TiShoppingCart from 'react-icons/lib/ti/shopping-cart'
import MdAttachMoney from 'react-icons/lib/md/attach-money'
import {browserHistory} from 'react-router'
import './ListCreator.css'

const mapStateToProps = (state) => ({
    itemsToBuy: state.allProductsCounter.itemsToBuy,
    currentListName: state.listCreator.currentListName,
    shoppingLists: state.listCreator.shoppingLists,
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
            listName: '',
            budgetToSave: '',
            savedBudget: 0
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
            updateExternalShoppingLists();
        }

        const basketValue = itemsToBuy
            .map(item => item.price*item.quantity)
            .reduce( (prev, next) => prev + next, 0).toFixed(2);

        return (
            <div className="list-creator">

                <div className="budget-panel">
                    <div className="sum">
                        <TiShoppingCart/>
                        <span>
                            {' '}{basketValue}
                            {' zł'}
                        </span>
                    </div>
                    <div className="budget">
                        <span>{'BUDŻET: '}</span>
                        <MdAttachMoney />
                        <span>
                            {' '}
                            {Number(this.state.savedBudget).toFixed(2)}
                            {' zł'}
                        </span>
                    </div>
                    <div
                        className={Number(this.state.savedBudget) >= Number(basketValue) ?
                            "budget-indicator" : "budget-indicator no-money"}>
                    </div>
                </div>

                <div className="form-fields">
                    <input
                        onChange={(event) => this.setState({
                            budgetToSave: event.target.value
                        })}
                        value={this.state.budgetToSave}
                        placeholder="Podaj swój budżet..."
                    />
                    <MenuItem
                        bsClass="button"
                        onClick={() =>
                            isNaN(Number(this.state.budgetToSave)) ||
                            this.state.budgetToSave < 0 ?
                                alert('Wpisana wartość musi być liczbą dodatnią.' +
                                    ' Części ułamkowe należy podać po kropce') :
                                this.setState({
                                    budgetToSave: '',
                                    savedBudget: this.state.budgetToSave
                                })}>
                        Zapisz budżet
                    </MenuItem>
                    <div className="divider"></div>
                    <input
                        onChange={(event) => this.setState({
                            listName: event.target.value
                        })}
                        value={this.state.listName}
                        placeholder="Wpisz nazwę listy..."
                    />
                    <MenuItem
                        bsClass="button"
                        onClick={() =>
                            itemsToBuy.length === 0 ?
                                alert('Wybierz produkt, aby stworzyć listę...') :
                                saveNewList(itemsToBuy, this.state.listName)}
                        eventKey="/shopping-lists"
                        onSelect={
                            itemsToBuy.length === 0 ?
                                null :
                                handleSelect}>
                        Stwórz nową listę
                    </MenuItem>

                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCreator)