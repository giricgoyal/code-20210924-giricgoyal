import { combineReducers } from 'redux'
import navigationReducer from '../../models/navigation/reducer'
import userReducer from '../../models/user/reducer'

export default combineReducers({
    ...userReducer,
    ...navigationReducer,
})
