import { IRoute } from '../../common/Types';
import SimpleLayout from '../../layouts/SimpleLayout';
import NotFound from './NotFound';

export const NotFoundRoutes: IRoute = {
  path: '*',
  element: NotFound,
  layout: SimpleLayout,
};
