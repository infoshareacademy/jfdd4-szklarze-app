import React from 'react'
import { saveNewList, setCurrentListName } from './actionCreators'
import { connect } from 'react-redux'
import './ListCreator.css'

const mapStateToProps = (state) => ({
    itemsToBuy: state.allProducts.itemsToBuy,
    currentListName: state.allProducts.currentListName
})

const mapDispatchToProps = (dispatch) => ({
    saveNewList: () => dispatch(saveNewList()),
    setCurrentListName: (listName) => dispatch(setCurrentListName(listName))

})

const ListCreator = ({
    saveNewList,
    setCurrentListName,
    itemsToBuy,
    currentListName
}) => (
    <div className="list-creator">
        <input
            onChange={(event) => setCurrentListName(event.target.value)}
            value={currentListName}
            placeholder="Wpisz nazwę listy..."
        />
        <button className="blue-button"
                onClick={() =>
            itemsToBuy.length === 0 ?
                alert('Wybierz produkt, aby stworzyć listę') :
                saveNewList()}>
            Stwórz nową listę
        </button>

    </div>
)


export default connect(mapStateToProps, mapDispatchToProps)(ListCreator)