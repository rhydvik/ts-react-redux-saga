import React from 'react';
import { RouteObject, Navigate } from 'react-router-dom';

import { IRoute } from '../Types';

type AppRoutes = {
  PublicRoutes: IRoute[];
  ProtectedRoutes: IRoute[];
};

export const createRoutes = (routes: AppRoutes, isLoggedIn: boolean) => {
  const { PublicRoutes, ProtectedRoutes } = routes;
  const allRoutes: RouteObject[] = [];

  PublicRoutes.map(({ element: Element, layout: Layout, path }) => {
    allRoutes.push({
      path,
      element: (
        <Layout>
          <Element />
        </Layout>
      ),
    });
  });

  ProtectedRoutes.map(({ element: Element, layout: Layout, path }) => {
    allRoutes.push({
      path,
      element: isLoggedIn ? (
        <Layout>
          <Element />
        </Layout>
      ) : (
        <Navigate to="sign-in" />
      ),
    });
  });
  return allRoutes;
};
