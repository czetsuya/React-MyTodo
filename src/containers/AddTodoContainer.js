import AddTodo from '../components/AddTodo'

const addTodo = (todo) => {
    console.log(todo)
    return {
        type: "ADD_TODO",
        data: {
            todo: todo
        }
    }
}

const mapStateToProps = (state, ownProps) => ({
    todo: state.todo,
    id: state.id
})

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddTodo: (todo) => dispatch(addTodo(todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)