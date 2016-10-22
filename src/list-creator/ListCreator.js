import React from 'react'
import { saveNewList } from './actionCreators'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    saveNewList: () => dispatch(saveNewList())

})

const ListCreator = (props) => (
    <div>
        <button onClick={() => saveNewList()}>
            Stwórz nową listę
        </button>
    </div>
)


export default connect(mapStateToProps, mapDispatchToProps)(ListCreator)