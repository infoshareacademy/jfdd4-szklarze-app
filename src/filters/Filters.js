import React from 'react'
import { connect } from 'react-redux'
import { Button, ButtonToolbar} from 'react-bootstrap'
import { toggleFavoriteFilter, setCategoryFilter, removeCategoryFilter} from './actionCreators'

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
        <p>Pokaż produkty:</p>
        <ButtonToolbar>
            <Button>Wszystkie</Button>
            <Button>Ulubione</Button>
        </ButtonToolbar>
        <p>Filtruj:</p>
        <ButtonToolbar>
            {categories.map((category, index) =>
                <Button key={index}>{category}</Button>
            )}
        </ButtonToolbar>
        <ButtonToolbar>
            <Button>Usuń filtry</Button>
        </ButtonToolbar>

    </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(Filters)