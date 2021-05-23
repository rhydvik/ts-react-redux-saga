import { string } from 'yup/lib/locale';

import { authInitialState } from '../auth/reducer';
import { RootState } from './rootState';

export const rootInitialState: RootState = {
  Auth: authInitialState,
  router: {
    location: '',
    action: '',
  },
};
