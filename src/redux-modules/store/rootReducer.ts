import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { AuthReducer } from '../auth';

// create a root reducer
const rootReducer = (history: History) =>
  combineReducers({
    Auth: AuthReducer,

    // for connected router
    router: connectRouter(history),
  });

export default rootReducer;
