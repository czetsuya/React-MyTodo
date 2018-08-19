import { connect } from 'react-redux'
import FilterLink from '../components/FilterLink'
import * as TodoAction from '../actions/Todo.action'

export const VisibilityFilterType = {
    ALL: 'SHOW_ALL',
    COMPLETED: 'SHOW_COMPLETED',
    ACTIVE: 'SHOW_ACTIVE'
}



const mapStateToProps = (state, ownProps) => ({
    active: state.visibilityFilter === ownProps.filter,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    filterTodo: () => dispatch(TodoAction.filterTodo(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink)