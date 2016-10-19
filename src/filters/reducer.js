import {TOGGLE_FAVORITE_FILTER, SET_CATEGORY_FILTER, REMOVE_CATEGORY_FILTERS, REMOVE_SINGLE_FILTER} from './actionTypes'

const initialState = {
    favoritesFilter: false,
    categoryFilter: ['none']
}

export default (state = initialState, action) => {
    switch (action.type) {
        case (TOGGLE_FAVORITE_FILTER):
            return Object.assign({}, state, {
                favoritesFilter: state.favoritesFilter === false
            })
        case (SET_CATEGORY_FILTER):
            return Object.assign({}, state, {
                categoryFilter: state.categoryFilter
                    .concat(action.category)
                    .filter(category => category !== 'none')
                    .sort()
                    .filter(
                        (category, index, allCategories) => {
                            return allCategories[index] !== allCategories[index-1]
                        })
            })
        case (REMOVE_CATEGORY_FILTERS):
            return Object.assign({}, state, {
                categoryFilter: ['none']
            })
        case (REMOVE_SINGLE_FILTER):
            return Object.assign({}, state, {
                categoryFilter: state.categoryFilter
                    .filter(category => category !== action.category)
            })
        default:
            return state
    }
}