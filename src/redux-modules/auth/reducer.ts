import { USER_LOGIN_COMPLETE, USER_LOGIN } from './Actions';
import { AuthAction, AuthState } from './Types';

export const authInitialState: AuthState = {
  user: {
    name: '',
  },
  isLoading: false,
  loggedIn: false,
};

export default (state = authInitialState, action: AuthAction) => {
  const { type } = action;
  switch (type) {
    case USER_LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOGIN_COMPLETE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
