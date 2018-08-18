/**
 * @author Edward P. Legaspi
 * @since 1.0
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
//import api from '../middleware/api'
import rootReducer from '../../reducers';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import { crashReporter } from '../Middlewares';
import { monitorReducerEnhancer } from '../Enhancers';
import { apiMiddleware } from 'redux-api-middleware';

const promiseMiddleware = promise();

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
        apiMiddleware,
        promiseMiddleware,
        createLogger(),
        crashReporter
      ),
      monitorReducerEnhancer
    )
  );

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export default configureStore;
