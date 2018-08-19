import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo'
import * as TodoAction from '../actions/Todo.action'

const mapStateToProps = (state) => ({
    todos: state.todos,
    id: state.id
})

const mapDispatchToProps = (dispatch) => ({
    addTodo: todo => dispatch(TodoAction.addTodo(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)