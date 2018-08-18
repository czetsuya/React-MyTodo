import { connect } from 'react-redux'
import FilterLink from '../components/FilterLink'

export const VisibilityFilterType = {
    ALL: 'SHOW_ALL',
    COMPLETED: 'SHOW_COMPLETED',
    ACTIVE: 'SHOW_ACTIVE'
}

// action creators
const actionFilterTodo = (filter) => ({
    type: 'VISIBILITY_FILTER',
    filter
})

const mapStateToProps = (state, ownProps) => ({
    active: state.visibilityFilter === ownProps.filter,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    filterTodo: () => dispatch(actionFilterTodo(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink)