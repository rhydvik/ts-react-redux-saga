import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { routerMiddleware } from 'connected-react-router';

import rootSaga from './rootSaga';
import rootReducer from './rootReducer';
import { StoreConfig } from './Types';
import history from '../../common/utils/history';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();
// eslint-disable-next-line no-undef
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// redux sagas is a middleware that we apply to the store
export const configStore = (): StoreConfig => {
  const store = createStore(rootReducer(history), composeEnhancers(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(rootSaga);
  return { store };
};
