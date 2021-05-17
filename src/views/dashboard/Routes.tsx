import { IRoute } from '../../common/Types';
import SimpleLayout from '../../layouts/SimpleLayout';
import Dashboard from './Dashboard';

export const DashboardRoute: IRoute = {
  path: '/',
  component: Dashboard,
  layout: SimpleLayout,
};
