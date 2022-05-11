// action 정의
const IS_OPEN  = `IS_OPEN`;
const IS_CLOSE = `IS_CLOSE`;

// 어떤것을 클릭했는지
const IS_CLICK_OPEN  = `IS_CLICK_OPEN`;
const IS_CLICK_CLOSE = `IS_CLICK_CLOSE`;

// 초기 State 정의
const initialState_Open  = false;
const initialState_Click = [];


// action 생성 함수
export function isOpen(){
    return {
        type : IS_OPEN,
        payload : true
    }
}

export function isClose(){
    return {
        type  : IS_CLOSE,
        payload : false
    }
}

export function isClickOpen(data){
    return {
        type : IS_CLICK_OPEN,
        payload : {
            content   : data.content,
            completed : data.completed,
            id        : data.id
        }
    }
}
export function isClickClose(){
    return {
        type    : IS_CLICK_CLOSE,
        payload : initialState_Click
    }
}

// action의 상태를 받는 Reducer 작성
export function modalReducer(state = initialState_Open, action){
    switch(action.type){
        case IS_OPEN :
            return true
        case IS_CLOSE :
            return false
        default :
            return state
    }
}

export function clickReducer(state = initialState_Click, action){
    switch(action.type){
        case IS_CLICK_OPEN :
            return action.payload
        case IS_CLICK_CLOSE :
            return action.payload
        default:
            return state
    }
}