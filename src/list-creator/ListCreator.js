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
            updateExternalShoppingLists,
            pricesData
        } = this.props

        const handleSelect = (eventKey) => {
            event.preventDefault();
            browserHistory.push(eventKey);
            updateExternalShoppingLists();
        }

        return (
            <div className="list-creator">

                <BudgetPanel
                    pricesData={pricesData}
                    savedBudget={this.state.savedBudget}
                    itemsToBuy={itemsToBuy}
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
                                saveNewList(itemsToBuy, this.state.listName)}
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