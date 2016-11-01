import {
    OPEN_EDIT_FIELD,
    HIDE_EDIT_FIELD
} from './actionTypes'

const initialState = {
    isEditFieldActive: false,
    changedListName: ""
}

export default (state=initialState, action) => {
    switch (action.type) {
        case OPEN_EDIT_FIELD:
            return Object.assign({}, state, {
                isEditFieldActive: true
            })
        case HIDE_EDIT_FIELD:
            return Object.assign({}, state, {
                isEditFieldActive: false
            })
        default:
            return state
    }
}
