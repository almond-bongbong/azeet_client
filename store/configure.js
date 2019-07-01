import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import ReduxThunk from 'redux-thunk';
import modules from './modules';
import rootSaga from './sagas';

const configure = (initialState = {}) => {
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    modules,
    initialState,
    composeEnhancers(
      applyMiddleware(ReduxThunk, sagaMiddleware),
    ),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configure;
