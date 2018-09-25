import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Login from './routes/login/login';
import BasicLayout from './layout/BasicLayout'

export default function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route key="login" path='/login' component={Login}/>
        <Route
          path="/"
          render={props => <BasicLayout {...props} />}
        />
      </Switch>
    </Router>
  );
}
