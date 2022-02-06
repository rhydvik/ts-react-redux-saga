import { IRoute } from '../../common/Types';
import SignIn from './SignIn';
import SimpleLayout from '../../layouts/SimpleLayout';

export const SignInRoute: IRoute = {
  exact: true,
  path: '/sign-in',
  element: SignIn,
  layout: SimpleLayout,
};
