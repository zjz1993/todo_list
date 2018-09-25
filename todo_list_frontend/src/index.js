import React from 'react';
import ReactDOM from 'react-dom';
import routerConfig from './router';
import createHistory from 'history/createBrowserHistory';
import 'antd/dist/antd.less';  // or 'antd/dist/antd.less'
import './style/index.less'
const history = createHistory();

const render = Component => {
  ReactDOM.render(
  <Component history={history}/>
  , document.getElementById('root'));
};
render(routerConfig);

// ReactDOM.render(<App />, document.getElementById('root'));
