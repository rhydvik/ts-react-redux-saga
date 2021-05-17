import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { SignInRoute } from './views/signin/Routes';
import { IRoute } from './common/Types';
import PublicRouteWrapper from './layouts/PublicRouteWrapper';
import { DashboardRoute } from './views/dashboard/Routes';
import AuthenticatedRouteWrapper from './layouts/AuthenticatedRouteWrapper';

const Routes = () => {
  const PublicRoutes = [SignInRoute];
  const AuthenticatedRoute = [DashboardRoute];

  return (
    <Switch>
      {PublicRoutes.map((route: IRoute, index: number) => (
        <PublicRouteWrapper key={`public-route-wrapper-${index}`} {...route} />
      ))}
      {AuthenticatedRoute.map((route: IRoute, index: number) => (
        <AuthenticatedRouteWrapper key={`public-route-wrapper-${index}`} {...route} />
      ))}
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
