import { USER_LOGIN_COMPLETE, USER_LOGIN } from './Actions';
import { AuthAction, AuthState } from './Types';

const initialState: AuthState = {
  user: {
    name: '',
  },
  isLoading: false,
  loggedIn: false,
};

export default (state = initialState, action: AuthAction) => {
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
