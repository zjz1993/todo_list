import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from './routes/index';
import './style/index.less';
import Login from './routes/login/Login';

ReactDOM.render(
  <Router>
    <div className="router_root">
      <Route exact path="/" component={Index} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>,
  document.getElementById('root') as HTMLElement
);
