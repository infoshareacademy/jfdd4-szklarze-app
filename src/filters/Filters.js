import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    products: state.products,
    categories: state.products.map(product => product.category).sort().filter(
        (category, index, allCategories) => {
            return allCategories[index] !== allCategories[index-1]
        })
})

const mapDispatchToProps = (dispatch) => ({

})

const Filters = ({categories}) => (
    <div>
        {categories.map(category =>
        <button>{category}</button>
        )}
    </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(Filters)