/**
 * @author Edward P. Legaspi
 * @since 1.0
 */
import Raven from 'raven-js';
import { CALL_API } from 'redux-api-middleware'

/**
 * Assign authorization token if available from local storage
 */
export const apiAuthInjector = store => next => action => {
  const callApi = action[CALL_API]

  // Check if this action is a redux-api-middleware action.
  if (callApi) {
    // Inject the Authorization header from localStorage.
    callApi.headers = Object.assign({}, callApi.headers, {
      Authorization: localStorage.getItem('authorization_token') || '',
    })
  }

  // Pass the FSA to the next action.
  return next(action)

}

/**
 * Sends crash reports as state is updated and listeners are notified.
 */
export const crashReporter = store => next => action => {
  try {
    return next(action);
  } catch (err) {
    console.error('Caught an exception!', err);
    Raven.captureException(err, {
      extra: {
        action,
        state: store.getState()
      }
    });
    throw err;
  }
};