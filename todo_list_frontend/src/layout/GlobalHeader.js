/*
   由zhaojunzhe于2018/9/18创建
*/
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './style/header.module.less';
import logo from "../public/image/logo.png";

export default ({ className }) => {
  // const clsString = classNames(styles.footer, className);
  return (
    <div className={styles.top_bar}>
      <Link to="/"><img src={logo} className={styles.logo}/></Link>
    </div>
  );
};

