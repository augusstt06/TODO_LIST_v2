import {combineReducers} from "redux";
import {modalReducer} from "./modalState";
import {completeReducer} from "./completeState";


const rootReducer = combineReducers({
    modalReducer,
    completeReducer
});

export default rootReducer;