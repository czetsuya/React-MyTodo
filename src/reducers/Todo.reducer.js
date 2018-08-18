import { VisibilityFilterType } from '../containers/FilterLink.container'

//reducer
export const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.todo,
                    completed: false
                }
            ]
        case "TOGGLE_TODO":
            return state.map(todo => 
                    (action.id === todo.id) 
                        ?  { ...todo, completed: !todo.completed } 
                        : todo
                )
        default:
            return state
    }
}

export const visibilityFilter = (state = VisibilityFilterType.ALL, action) => {
    switch(action.type) {
        case 'VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}