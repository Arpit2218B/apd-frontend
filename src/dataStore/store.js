import { combineReducers, createStore } from "redux";
import alertReducer from './alertReducer';

const store = createStore(combineReducers({
    alertReducer: alertReducer
}));

export default store;