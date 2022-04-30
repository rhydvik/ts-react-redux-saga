import { AuthState } from '../auth/Types';

export interface RootState {
  Auth: AuthState;
  router: Record<string, string>;
}
