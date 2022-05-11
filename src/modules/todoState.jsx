const GET_TODO    = 'GET_TODO';
const POST_TODO   = 'POST_TODO';
const PUT_TODO    = 'PUT_TODO';
const DELETE_TODO = 'DELETE_TODO';

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
export function isPost(data){
    return {
        type   : POST_TODO,
        payload : {
            content   : data.content,
            completed : data.completed,
            id        : data.id
        }
    }
}
export function isDelete(data,id){
    return {
        type : DELETE_TODO,
        payload : data.filter(data => data.id !== id)
    }
}

export function todoReducer(state = initialState, action){
    switch(action.type){

        case GET_TODO:
            return action.payload

        case POST_TODO:
            return [
                ...state,
                {
                    content   : action.payload.content,
                    completed : action.payload.completed,
                    id        : action.payload.id
                }
            ]

        case PUT_TODO:
            return

        case DELETE_TODO:
            return action.payload

        default:
            return state
    }
}