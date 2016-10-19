import {
    TOGGLE_FAVORITE_FILTER,
    SET_CATEGORY_FILTER,
    REMOVE_CATEGORY_FILTERS,
    REMOVE_SINGLE_FILTER} from './actionTypes'

export function toggleFavoriteFilter() {
    return {
        type: TOGGLE_FAVORITE_FILTER
    }
}

export function setCategoryFilter(category) {
    return {
        type: SET_CATEGORY_FILTER,
        category: category
    }
}

export function removeCategoryFilter() {
    return {
        type: REMOVE_CATEGORY_FILTERS
    }
}

export function removeSingleFilter() {
    return {
        type: REMOVE_SINGLE_FILTER
    }
}