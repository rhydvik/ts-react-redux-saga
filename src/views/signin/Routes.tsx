import { IRoute } from 'common/Types';
import SimpleLayout from 'layouts/SimpleLayout';

import SignIn from './SignIn';

export const SignInRoute: IRoute = {
  exact: true,
  path: '/sign-in',
  element: SignIn,
  layout: SimpleLayout,
};
