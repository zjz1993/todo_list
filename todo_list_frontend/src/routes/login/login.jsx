import React from 'react';
import PropTypes from 'prop-types';
import styles from './style/Login.module.less'

class Login extends React.Component {
  static propTypes = {};
  static defaultProps = {};
  
  componentDidMount() {
  
  };
  
  render() {
    return (
      <div className={styles.login}>
        <div className={styles.login_main}>登录</div>
      </div>
    );
  }
}

export default Login;

