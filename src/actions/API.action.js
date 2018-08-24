import { RSAA } from 'redux-api-middleware'
import EventAction from '../core/EventAction'
 
export const pullRSSFeeds = (api) => dispatch => {
    dispatch(prePullRSSFeedsAPI())
    dispatch(pullRSSFeedsAPI(api))
}

const prePullRSSFeedsAPI = () => ({
    type: 'PRE_API_CALL'
})

const pullRSSFeedsAPI = api => ({
    [RSAA]: {
        endpoint: 'https://reqres.in/api/users?page=2',
        method: 'GET',
        types: [EventAction.loadingAction(api), EventAction.successAction(api), EventAction.failAction(api)]
    }
})