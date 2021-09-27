import * as navigationActionTypes from './action-types'

const initialState = {
    page: '/',
}

const navigation = (state = initialState, action) => {
    switch (action.type) {
        case navigationActionTypes.SET_PAGE: {
            return {
                ...state,
                page: action.page,
            }
        }
        default: {
            return state
        }
    }
}

export default {
    navigation,
}
