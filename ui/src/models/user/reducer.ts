import * as actionTypes from './action-types'

const initialState = {
    name: '',
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USER_SUCCESS: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default: {
            return state
        }
    }
}

export default {
    user,
}
