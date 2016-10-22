import React from 'react'
import { saveNewList, setCurrentListName } from './actionCreators'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    itemsToBuy: state.allProducts.itemsToBuy
})

const mapDispatchToProps = (dispatch) => ({
    saveNewList: () => dispatch(saveNewList()),
    setCurrentListName: (listName) => dispatch(setCurrentListName(listName))

})

const ListCreator = ({
    saveNewList,
    setCurrentListName,
    itemsToBuy
}) => (
    <div>
        <input placeholder="Wpisz nazwę twojej listy"
               onChange={(event) => setCurrentListName(event.target.value)}/>
        <button onClick={() =>
            itemsToBuy.length === 0 ?
                alert('Wybierz produkt, aby stworzyć listę') :
                saveNewList()}>
            Stwórz nową listę
        </button>
    </div>
)


export default connect(mapStateToProps, mapDispatchToProps)(ListCreator)