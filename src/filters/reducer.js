import {TOGGLE_FAVORITE_FILTER, SET_CATEGORY_FILTER, REMOVE_CATEGORY_FILTERS} from './actionTypes'

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
            })
        case (REMOVE_CATEGORY_FILTERS):
            return Object.assign({}, state, {
                categoryFilter: ['none']
            })
        default:
            return state
    }
}