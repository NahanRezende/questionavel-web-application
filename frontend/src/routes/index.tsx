import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import { Login } from '../pages/Login';
import { CreateAccount } from '../pages/CreateAccount';
import { DashBoard } from '../pages/DashBoard';
import { CreateSurvey } from '../pages/CreateSurvey';
import { Survey } from '../pages/Survey';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/create-account" exact component={CreateAccount} />
        <Route path="/dashboard" exact component={DashBoard} />
        <Route path="/create-survey" exact component={CreateSurvey} />
        <Route path="/survey" exact component={Survey} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
