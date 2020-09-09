import { errorsConstants } from "../actions/constants";

const initialState = {
    message: {},
    status: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case errorsConstants.SET_ERRORS:
            return {
                message: action.payload.message,
                status: action.payload.status
            }

        case errorsConstants.CLEAR_ERRORS:
            return {
                message: {},
                status: null
            }
        default:
            return state;
    }
}