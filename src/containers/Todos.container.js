import { connect } from 'react-redux'
import Todos from "../components/Todos";
import { VisibilityFilterType } from './FilterLink.container'
import * as TodoAction from '../actions/Todo.action'

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



const mapStateToProps = state => ({
    todos: filterTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: todoId => dispatch(TodoAction.toggleTodo(todoId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos)