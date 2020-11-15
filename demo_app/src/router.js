import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { App } from './App';
import { Login } from './login/login';

export const Routes = () => (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Dashboard" component={App} />
    </Switch>
)
