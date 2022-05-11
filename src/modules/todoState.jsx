const ADD_TODO = 'ADD_TODO';
const GET_TODO = 'GET_TODO';

const initialState = [];

export function isGet(data){
    return{
        type    : GET_TODO,
        payload : data.map(data => (
        {
            content   : data.content,
            completed : data.completed,
            id        : data.id
        }
        ))
    }
}
export function isAdd(data){
    return {
        type   : ADD_TODO,
        payload : {
            content   : data.id,
            completed : data.completed,
            id        : data.id
        }
    }
}

export function todoReducer(state = initialState, action){
    switch(action.type){
        case GET_TODO:
            return action.payload
        case ADD_TODO:
            return [
                ...state,
                {
                    content   : action.payload.content,
                    completed : action.payload.completed,
                    id        : action.payload.id
                }
            ]
        default:
            return state
    }
}