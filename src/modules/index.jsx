import {combineReducers} from "redux";
import {modalReducer, clickReducer} from "./modalState";
import {todoReducer} from "./todoState";


const rootReducer = combineReducers({
    modalReducer,
    clickReducer,
    todoReducer
});

export default rootReducer;