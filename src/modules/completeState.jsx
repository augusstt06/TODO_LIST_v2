// action 정의
const IS_COMPLETE     = 'IS_COMPLETE';
const IS_NOT_COMPLETE = 'IS_NOT_COMPLETE';

// initial State 정의

const initialState = false;

// action 생성 함수
export function isComplete(){
    return {
        type  : IS_COMPLETE,
        state : true
    }
}
export function isNotComplete(){
    return {
        type  : IS_NOT_COMPLETE,
        state : false
    }
}

// Reducer 작성
export function completeReducer(state=initialState, action){
    switch(action.type){
        case IS_COMPLETE:
            return true
        case IS_NOT_COMPLETE:
            return false
        default:
            return state
    }
}