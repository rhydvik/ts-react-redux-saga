import { ISignInModal } from '../../common/Types';

export const USER_LOGIN = 'user/USER-LOGIN';
export const USER_LOGIN_COMPLETE = 'user/USER-LOGIN-COMPLETE';
export const USER_LOGIN_LOADING = 'user/USER-LOGIN-LOADING';

export const loginUser = (payload: ISignInModal) => {
	return {
		type: USER_LOGIN,
		payload,
	};
};
