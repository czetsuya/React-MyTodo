import { combineReducers } from "../../node_modules/redux";

const todos = (state = [], action) => {
    console.log(action)
    switch(action.type) {
        case 'ADD_TODO' :
        return [
            ...state,
            {
                id: action.id,
                text: action.text,
                completed: false
            }
        ]

        default:
            return state
    }
}

export default combineReducers({
    todos
})