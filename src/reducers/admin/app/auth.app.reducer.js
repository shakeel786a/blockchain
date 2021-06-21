import { authAction } from "../../../actions";

const initialState = {
    token: null
}

export default function authAppReducer(state = initialState, action) {
    switch(action.type) {
        case authAction.SET_TOKEN:
            return { token: action.payload.token }
        default:
            return state
    }
}