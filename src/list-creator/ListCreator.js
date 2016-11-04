import React from 'react'
import { saveNewList, updateExternalShoppingLists } from './actionCreators'
import { connect } from 'react-redux'
import BudgetPanel from './budget-panel/BudgetPanel'
import FormField from './form-field/FormField'
import {browserHistory} from 'react-router'
import './ListCreator.css'

const mapStateToProps = (state) => ({
    itemsToBuy: state.allProductsCounter.itemsToBuy,
    currentListName: state.listCreator.currentListName,
    shoppingLists: state.listCreator.shoppingLists,
    pricesData: state.pricesData.prices
})

const mapDispatchToProps = (dispatch) => ({
    saveNewList: (itemsToBuy, listName, savedBudget) =>
        dispatch(saveNewList(itemsToBuy, listName, savedBudget)),
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
            updateExternalShoppingLists,
            pricesData
        } = this.props

        const handleSelect = (eventKey) => {
            event.preventDefault();
            browserHistory.push(eventKey);
            updateExternalShoppingLists();
        }

        const getItemsAvgPrice = (item) => {
            let productPrices = pricesData
                .filter(marker => marker.productId === item.productId)
                .map(marker => marker.price)
            return (productPrices
                .reduce((prev, next) => prev + next)/productPrices.length).toFixed(2)
        }

        const basketValue = itemsToBuy
            .map(item => getItemsAvgPrice(item)*item.quantity)
            .reduce( (prev, next) => prev + next, 0);

        return (
            <div className="list-creator">

                <BudgetPanel
                    savedBudget={this.state.savedBudget}
                    basketValue={basketValue}
                />

                <div className="form-fields">

                    <FormField
                        handleChange={(event) => this.setState({
                                budgetToSave: event.target.value
                            })}
                        handleClick={() =>
                            isNaN(Number(this.state.budgetToSave)) ||
                            this.state.budgetToSave < 0 ?
                                alert('Wpisana wartość musi być liczbą dodatnią.' +
                                    ' Części ułamkowe należy podać po kropce') :
                                this.setState({
                                    budgetToSave: '',
                                    savedBudget: this.state.budgetToSave
                                })}
                        value={this.state.budgetToSave}
                        placeholder="Podaj swój budżet...">
                            Zapisz budżet
                    </FormField>

                    <FormField
                        handleChange={(event) => this.setState({
                            listName: event.target.value
                        })}
                        handleClick={() =>
                            itemsToBuy.length === 0 ?
                                alert('Wybierz produkt, aby stworzyć listę...') :
                                saveNewList(
                                    itemsToBuy,
                                    this.state.listName,
                                    this.state.savedBudget)}
                        value={this.state.listName}
                        placeholder="Wpisz nazwę listy..."
                        eventKey="/shopping-lists"
                        handleButtonSelect={itemsToBuy.length === 0 ?
                            null : handleSelect}>
                            Zapisz listę
                    </FormField>

                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCreator)