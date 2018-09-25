import React from 'react';
import {Table, Divider, Modal} from 'antd';
import PropTypes from 'prop-types';
import {getFinishTask} from '../../service/indexApi'

class Done extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      columns: [{
        title: '任务名称',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: '任务开始时间',
        dataIndex: 'startTime',
        key: 'startTime',
      }, {
        title: '任务结束时间',
        dataIndex: 'endTime',
        key: 'endTime',
      }, {
        title: '任务优先级',
        dataIndex: 'priority',
        key: 'priority',
      }]
    }
  }
  
  componentDidMount() {
    this.loadData()
  };
  loadData = () => {
    getFinishTask().then((data) => {
      const res = JSON.parse(data);
      console.log(res);
      this.setState({dataSource: res});
    })
  };
  render() {
    const {dataSource, columns} = this.state;
    return (
    <div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
    );
  }
}

export default Done;

