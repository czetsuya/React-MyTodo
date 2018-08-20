import EventAction from '../core/EventAction'
import * as APIContainer from '../containers/API.container';

export const api = (state = EventAction.loadingAction(), action) => {
    switch(action.type) {
        case EventAction.loadingAction(APIContainer.API_FETCH_SOMETHING):
            return {
               isLoading: true
            }
        case EventAction.successAction(APIContainer.API_FETCH_SOMETHING):
            return {
                isLoading: false,
                result: action.payload.data
            }
        case EventAction.failAction(APIContainer.API_FETCH_SOMETHING):
            return {
                isLoading: false,
                payload: action.payload
            }
        default:
            return state
    }
}