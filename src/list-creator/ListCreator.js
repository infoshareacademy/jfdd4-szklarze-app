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
    itemsToBuy
}) => (
    <div>
        <input defaultValue={1} placeholder="Wpisz nazwę listy" onChange={(event) => console.log(event.target.value)}/>
        <button onClick={() =>
            itemsToBuy.length === 0 ?
                alert('Wybierz produkt, aby stworzyć listę') :
                saveNewList()}>
            Stwórz nową listę
        </button>
    </div>
)


export default connect(mapStateToProps, mapDispatchToProps)(ListCreator)