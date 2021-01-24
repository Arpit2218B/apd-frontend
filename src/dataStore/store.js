import { combineReducers, createStore } from "redux";
import alertReducer from './alertReducer';
import userReducer from "./userReducer";

const store = createStore(combineReducers({
    alertReducer: alertReducer,
    userReducer: userReducer
}));

export default store;