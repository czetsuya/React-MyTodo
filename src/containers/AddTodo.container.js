import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo'

export const addTodo = todo => ({
    type: "ADD_TODO",
    todo: todo
})

const mapStateToProps = (state) => ({
    todo: "state.todo",
    id: state.id
})

const mapDispatchToProps = (dispatch) => ({
    onAddTodo: todo => dispatch(addTodo(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)