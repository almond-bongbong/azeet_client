import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import ReduxThunk from 'redux-thunk';
import modules from './modules';
import rootSaga from './sagas';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const sagaMiddleware = createSagaMiddleware();
const configure = createStore(
  modules,
  /* preloadedState, */
  composeEnhancers(
    applyMiddleware(ReduxThunk, sagaMiddleware),
  ),
);

export default configure;

sagaMiddleware.run(rootSaga);
