import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo'

//action creators
let nextTodoId = 0

const actionAddTodo = todo => ({
    id: nextTodoId++,
    type: "ADD_TODO",
    todo: todo
})

const mapStateToProps = (state) => ({
    todos: state.todos,
    id: state.id
})

const mapDispatchToProps = (dispatch) => ({
    addTodo: todo => dispatch(actionAddTodo(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)