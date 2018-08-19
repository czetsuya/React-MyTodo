import { connect } from 'react-redux'
import APIHome from '../components/APIHome'
import * as APIAction from '../actions/API.action'

export const API_FETCH_SOMETHING = 'reqres.in/api/users/fetch'

const mapStateToProps = (state) => ({
    isLoading: state.api.isLoading
})

const mapDispatchToProps = (dispatch) => ({
    pullData: () => dispatch(APIAction.pullRSSFeeds(API_FETCH_SOMETHING))
})

export default connect(mapStateToProps, mapDispatchToProps)(APIHome)