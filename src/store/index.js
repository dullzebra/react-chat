import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore() {
  if (process.env.NODE_ENV === 'production') {
    return createStore(rootReducer, applyMiddleware(thunkMiddleware));
  }
  /* eslint-disable no-underscore-dangle */
  let store;
  if (typeof window !== 'undefined') {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ serialize: true })
      : compose;
    /* eslint-enable no-underscore-dangle */
    store = createStore(
      rootReducer,
      window.INITIAL_STATE,
      composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)),
    );
  } else {
    store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
  }

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
