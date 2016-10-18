import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    products: state.products.products
})

const mapDispatchToProps = (dispatch) => ({

})

const Filters = ({props}) => (
    <div>
        <button>Kategoria 1</button>
        <button>Kategoria 2</button>
        <button>Kategoria 3</button>
    </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(Filters)