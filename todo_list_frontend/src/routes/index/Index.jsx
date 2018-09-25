import React from 'react';
import styles from './style/Index.module.less';
import noTodayTask from '../../public/image/noTodayTask.png';
import moment from 'moment';
import {test} from '../../service/indexApi';
import { Link } from 'react-router-dom';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItemId: 1,
      array: []
    };
  }
  componentDidMount() {
    // test().then((data) => {
    //   console.log(data);
    // })
  };
  selectItem = (id) => {
    console.log(this.props);
    this.setState({currentItemId: id});
  };
  render() {
    const {currentItemId} = this.state;
    console.log(typeof this.state.array);
    return (
      <div className={styles.index}>
        <div className={styles.info}>
          今日{moment().format('M月DD日')}
          {this.state.array[0] ? this.state.array[0].title : null}
        </div>
        <div className={styles.complete_today}>
          <img src={noTodayTask} />
        </div>
      </div>
    );
  }
}

export default Index;

