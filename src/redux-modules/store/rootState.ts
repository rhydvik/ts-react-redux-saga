import { RouterState } from 'connected-react-router';

import { AuthState } from '../auth/Types';

export interface RootState {
  Auth: AuthState;
  router: Record<string, string>;
}
