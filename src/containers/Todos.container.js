import { connect } from 'react-redux'
import Todos from "../components/Todos";
import { VisibilityFilterType } from './FilterLink.container'

const filterTodos = (todos = [], filter) => {
    switch(filter) {
        case VisibilityFilterType.COMPLETED:
        return todos.filter(e => e.completed)
        case VisibilityFilterType.ACTIVE:
            return todos.filter(e => !e.completed)
        case VisibilityFilterType.ALL:
            return todos
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

//action creators
const actionToggleTodo = (todoId) => ({
    type: 'TOGGLE_TODO',
    id: todoId
})

const mapStateToProps = state => ({
    todos: filterTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: todoId => dispatch(actionToggleTodo(todoId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos)