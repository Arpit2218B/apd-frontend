import { USER } from "./actionConstants"

const initialValue = {
    user: JSON.parse(localStorage.getItem('jwt')) || null
}

const userReducer = (state=initialValue, action) => {
    switch(action.type) {
        case USER.SET_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;