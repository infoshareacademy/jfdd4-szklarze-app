import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    products: state.products.products,
    productCategories: state.products.map(product => state.products.category)
})

const mapDispatchToProps = (dispatch) => ({

})

const Filters = ({
    products,
    productCategories
}) => (
    <div>
        {productCategories.map(category =>
        <button>{category}</button>
        )}
    </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(Filters)