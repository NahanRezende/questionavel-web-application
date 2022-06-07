import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import { Login } from '../pages/Login';
import { CreateAccount } from '../pages/CreateAccount';
import { DashBoard } from '../pages/DashBoard';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/create-account" exact component={CreateAccount} />
        <Route path="/dashboard" exact component={DashBoard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
