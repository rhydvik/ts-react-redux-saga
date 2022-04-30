import { all, spawn, call } from 'redux-saga/effects';

import { AuthSagas } from '../auth';

export default function* RootSaga() {
	const sagas = [AuthSagas];
	yield all(
		sagas.map((saga) =>
			spawn(function* () {
				while (true) {
					try {
						yield call(saga);
						break;
					} catch (error) {
						console.log(error);
					}
				}
			}),
		),
	);
}
