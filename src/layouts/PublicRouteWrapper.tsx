import React from 'react';
import { Route } from 'react-router-dom';

import { IRoute } from '../common/Types';

type RouteWrapper = IRoute;

const PublicRouteWrapper = ({ layout: Layout, component: Component, ...props }: RouteWrapper) => {
  return (
    <Route
      {...props}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

export default PublicRouteWrapper;
