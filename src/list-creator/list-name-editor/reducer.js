import {
    UPDATE_LIST_NAME,
    OPEN_EDIT_FIELD,
    HIDE_EDIT_FIELD
} from './actionTypes'

const initialState = {
    isEditFieldActive: false
}

export default (state=initialState, action) => {
    switch (action.type) {
        case OPEN_EDIT_FIELD:
            return {
                isEditFieldActive: true
            }
        case HIDE_EDIT_FIELD:
            return {
                isEditFieldActive: false
            }
        default:
            return state
    }
}
