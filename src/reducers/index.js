import { combineReducers } from 'redux'

import adminAppReducer from './admin'

const reducers = combineReducers({
    admin: adminAppReducer
})

export { reducers }