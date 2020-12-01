import React from 'react';

import { Switch, useRouteMatch } from 'react-router-dom';

import { PageUser } from '@/app/admin/users/PageUser';
import { PageUsers } from '@/app/admin/users/PageUsers';
import { Route } from '@/app/router';
import { Error404 } from '@/errors';

export const AdminUsersRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}/`} render={() => <PageUsers />} />
      <Route exact path={`${path}/create`} render={() => <>Todo</>} />
      <Route exact path={`${path}/:login`} render={() => <PageUser />} />
      <Route path="*" render={() => <Error404 />} />
    </Switch>
  );
};
