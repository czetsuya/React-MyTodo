/**
 * @author Edward P. Legaspi
 * @since 1.0
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import api from '../middleware/api'
import rootReducer from '../../reducers';
import promise from 'redux-promise-middleware';
import { crashReporter } from '../Middlewares';
import { apiMiddleware } from 'redux-api-middleware';

const promiseMiddleware = promise();

const configureStore = preloadedState =>
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, apiMiddleware, promiseMiddleware, crashReporter)
  );

export default configureStore;
