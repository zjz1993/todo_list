/*
   由zhaojunzhe于2018/9/18创建
*/
import React from 'react';
import classNames from 'classnames';
import { Icon } from 'antd';
import styles from './style/footer.module.less';

export default ({ className }) => {
  const clsString = classNames(styles.footer, className);
  return (
  <footer className={clsString}>
    <div className={styles.copyright}>欢迎使用todo_list</div>
  </footer>
  );
};

