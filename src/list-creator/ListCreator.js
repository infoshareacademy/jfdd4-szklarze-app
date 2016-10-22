import React from 'react'
import { saveNewList } from './actionCreators'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    itemsToBuy: state.allProducts.itemsToBuy
})

const mapDispatchToProps = (dispatch) => ({
    saveNewList: (itemsToBuy) => dispatch(saveNewList(itemsToBuy))

})

const ListCreator = ({
    itemsToBuy,
    saveNewList
}) => (
    <div>
        <button onClick={() => saveNewList({itemsToBuy})}>
            Stwórz nową listę
        </button>
    </div>
)


export default connect(mapStateToProps, mapDispatchToProps)(ListCreator)