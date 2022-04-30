import { takeLatest, put, delay } from 'redux-saga/effects';

import { USER_LOGIN_LOADING, USER_LOGIN_COMPLETE, USER_LOGIN } from './Actions';
import { ISagaAction, ISignInModal } from '../../common/Types';
import history from '../../common/utils/history';

function* loginUser(payload: ISagaAction<ISignInModal>) {
  console.log(payload, 'data'); // eslint-disable-line
  yield put({ type: USER_LOGIN_LOADING });
  yield delay(3000); // instead of this you can make an api call
  yield put({ type: USER_LOGIN_COMPLETE });
  history.push('/');
}

export default function* authSagas() {
  yield takeLatest(USER_LOGIN, loginUser);
}
