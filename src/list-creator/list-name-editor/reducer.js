import {
    OPEN_EDIT_FIELD,
    HIDE_EDIT_FIELD,
    // STORE_NEW_LIST_NAME,
    // UPDATE_LIST_NAME
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
        // case STORE_NEW_LIST_NAME:
        //     return Object.assign({}, state, {
        //         changedListName: action.changedListName
        //     })
        // case UPDATE_LIST_NAME:
        //     return Object.assign({}, state, {
        //         changedListName: ""
        //     })
        default:
            return state
    }
}
