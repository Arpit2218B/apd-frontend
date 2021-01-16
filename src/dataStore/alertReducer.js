import { ALERTS } from "./actionConstants"

const initialState = {
    isSet: false,
    type: '',
    content: ''
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case ALERTS.SET_ALERT:
            return {
                ...state,
                isSet: action.payload.isSet,
                type: action.payload.type,
                content: action.payload.content
            }
        default:
            return state;
    }
}

export default reducer;