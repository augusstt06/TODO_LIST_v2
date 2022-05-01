// action 정의
const IS_OPEN  = `IS_OPEN`;
const IS_CLOSE = `IS_CLOSE`;

// 초기 State 정의
const initialState = false;

// action 생성 함수
export function isOpen(){
    return {
        type : IS_OPEN,
        state : true
    }
}

export function isClose(){
    return {
        type  : IS_CLOSE,
        state : false
    }
}

// action의 상태를 받는 Reducer 작성
export function modalReducer(state = initialState, action){
    switch(action.type){
        case IS_OPEN :
            return true
        case IS_CLOSE :
            return false
        default :
            return state
    }
}