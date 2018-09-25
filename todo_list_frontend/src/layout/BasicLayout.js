/*
   由zhaojunzhe于2018/9/18创建
*/
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route, Link, Switch } from 'react-router-dom';
import GlobalFooter from './GlobalFooter';
import GlobalHeader from './GlobalHeader';
import {getRouterData} from '../common/router';
import styles from "./style/BasicLayout.module.less";

class BasicLayout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentItemId: 0
    };
  }
  componentWillMount() {
  }
  selectItem = (id) => {
    this.setState({currentItemId: id});
  };
  render() {
    const {currentItemId} = this.state;
    const renderRouter = getRouterData().map((item) => {
      return (<Route exact={item.exact} key={item.key} component={item.component} path={item.path} />)
    });
    return (
    <div className="layout">
      <GlobalHeader />
      <div className={styles.container}>
        <div className={styles.todolist_app}>
          <div className={styles.app_holder}>
            <div className={styles.left_menu}>
              <div className={styles.list_holder}>
                <ul className={styles.top_filter}>
                  <Link to="/"><li key="0" className={currentItemId === 0 ? styles.current : null} onClick={(id) => this.selectItem(0)}>今日事项</li></Link>
                  <Link to="/create"><li key="1" className={currentItemId === 1 ? styles.current : null} onClick={(id) => this.selectItem(1)}>新建事项</li></Link>
                  <Link to="/todo"><li key="2" className={currentItemId === 2 ? styles.current : null} onClick={(id) => this.selectItem(2)}>待办事项</li></Link>
                  <Link to="/done"><li key="3" className={currentItemId === 3 ? styles.current : null} onClick={(id) => this.selectItem(3)}>已完成事项</li></Link>
                </ul>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.editor}>
                <Switch>
                  {renderRouter}
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GlobalFooter />
    </div>
    );
  }
}

export default BasicLayout;

