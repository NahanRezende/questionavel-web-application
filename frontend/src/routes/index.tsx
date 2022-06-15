import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import { Login } from '../pages/Login';
import { CreateAccount } from '../pages/CreateAccount';
import { DashBoard } from '../pages/DashBoard';
import { CreateSurvey } from '../pages/CreateSurvey';
import { ListSurveys } from '../pages/ListSurveys';
import { YourSurveys } from '../pages/YourSurveys';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/create-survey" exact component={CreateSurvey} isPrivate />
        <Route path="/list-surveys" exact component={ListSurveys} isPrivate />
        <Route path="/your-surveys" exact component={YourSurveys} isPrivate />
        <Route path="/create-account" exact component={CreateAccount} />
        <Route path="/dashboard" exact component={DashBoard} isPrivate />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
