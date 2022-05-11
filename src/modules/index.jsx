import {combineReducers} from "redux";
import {modalReducer} from "./modalState";
import {todoReducer} from "./todoState";


const rootReducer = combineReducers({
    modalReducer,
    todoReducer
});

export default rootReducer;