import React from 'react'
import { connect } from 'react-redux'
import { Button, ButtonToolbar} from 'react-bootstrap'
import { toggleFavoriteFilter, setCategoryFilter, removeCategoryFilter, removeSingleFilter} from './actionCreators'

const mapStateToProps = (state) => ({
    products: state.products,
    categories: state.products.map(product => product.category).sort().filter(
        (category, index, allCategories) => {
            return allCategories[index] !== allCategories[index-1]
        })
})

const mapDispatchToProps = (dispatch) => ({
    toggleFavoriteFilter: () => dispatch(toggleFavoriteFilter()),
    setCategoryFilter: (category) => dispatch(setCategoryFilter(category)),
    removeCategoryFilter: () => dispatch(removeCategoryFilter()),
    removeSingleFilter: (category) => dispatch(removeSingleFilter())
})

const Filters = ({
    categories,
    toggleFavoriteFilter,
    setCategoryFilter,
    removeCategoryFilter
}) => (
    <div>
        <p>Pokaż produkty:</p>
        <ButtonToolbar>
            <Button onClick={() => toggleFavoriteFilter()}>Wszystkie</Button>
            <Button onClick={() => toggleFavoriteFilter()}>Ulubione</Button>
        </ButtonToolbar>
        <p>Filtruj:</p>
        <ButtonToolbar>
            {categories.map((category, index) =>
                <Button key={index}
                        onClick={() => setCategoryFilter(category)}>
                    {category}
                </Button>
            )}
        </ButtonToolbar>
        <ButtonToolbar>
            <Button
                onClick={() => removeCategoryFilter()}>
                Usuń filtry
            </Button>
        </ButtonToolbar>

    </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(Filters)