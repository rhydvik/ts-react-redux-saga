import React from 'react';
import { BrowserRouter as Router, useRoutes, RouteObject } from 'react-router-dom';

import { SignInRoute } from './views/signin/Routes';
import { DashboardRoute } from './views/dashboard/Routes';
import { NotFoundRoutes } from './views/not-found/Routes';
import { createRoutes } from './common/utils/routeUtils';

const PublicRoutes = [SignInRoute, NotFoundRoutes];
const ProtectedRoutes = [DashboardRoute];

const App = () => {
  const appRoutes: RouteObject[] = createRoutes({ PublicRoutes, ProtectedRoutes }, false);
  return useRoutes(appRoutes);
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
