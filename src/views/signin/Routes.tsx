import { IRoute } from '../../common/Types';
import SignIn from './SignIn';
import SimpleLayout from '../../layouts/SimpleLayout';

export const SignInRoute: IRoute = {
  path: '/sign-in',
  component: SignIn,
  layout: SimpleLayout,
};
