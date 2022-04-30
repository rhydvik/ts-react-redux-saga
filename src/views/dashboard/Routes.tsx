import { IRoute } from '../../common/Types';
import Dashboard from './Dashboard';
import MainLayout from '../../layouts/MainLayout';

export const DashboardRoute: IRoute = {
  path: '/',
  exact: true,
  element: Dashboard,
  layout: MainLayout,
};
