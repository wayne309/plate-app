import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Spinner } from '../components/Spinner';

import { Home } from './home';

const Settings = lazy(() => import('./settings'));
const Login = lazy(() => import('./login'));
const Register = lazy(() => import('./register'));

export const Routes: React.FC = () => {
  return (
    <Suspense fallback={<Spinner isOverlay />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Suspense>
  );
};
