import { authAction } from "../../../actions";

const initialState = {
    isLogin: null
}

export default function authAppReducer(state = initialState, action) {
    switch(action.type) {
        case authAction.SET_TOKEN:
            return { ...state, isLogin: action.payload }
        default:
            return state
    }
}