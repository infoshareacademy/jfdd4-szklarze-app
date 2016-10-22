import React from 'react'
import { saveNewList } from './actionCreators'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    saveNewList: () => dispatch(saveNewList())
    setCurrentListName: (listName) => dispatch(setCurrentListName(listName))

})

const ListCreator = ({
    saveNewList
}) => (
    <div>
        <input onChange={(event) => setCurrentListName(event.target.value)}
        <button onClick={() => saveNewList()}>
            Stwórz nową listę
        </button>
    </div>
)


export default connect(mapStateToProps, mapDispatchToProps)(ListCreator)