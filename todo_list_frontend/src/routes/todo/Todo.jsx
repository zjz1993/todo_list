import React from 'react';
import {Table, Divider, Modal} from 'antd';
import styles from './style/Todo.module.less';
import PropTypes from 'prop-types';
import {getTask, deleteTask, finishTask} from '../../service/indexApi'

class Todo extends React.Component {
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
      }, {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <a href="javascript:;"><span onClick={id => this.editTask(record.id)}>编辑</span></a>
            <Divider type="vertical" />
            <a href="javascript:;"><span onClick={id => this.setDone(record.id)}>标记为完成</span></a>
            <Divider type="vertical" />
            <a href="javascript:;"><span onClick={id => this.deleteTask(record.id)}>删除</span></a>
          </span>
        ),
      }]
    }
  }
  
  componentDidMount() {
    this.loadData()
  };
  loadData = () => {
    getTask().then((data) => {
      const res = JSON.parse(data);
      console.log(res);
      this.setState({dataSource: res});
    })
  };
  setDone = (id) => {
    Modal.confirm({content: '是否将此任务标记为完成？', onOk: () => {
      finishTask({id}).then((data) => {
        console.log(data)
      });
    }});
  };
  deleteTask = (id) => {
    Modal.confirm({content: '是否删除这个任务', onOk: () => {
      deleteTask({id: id}).then((data) => {
        this.loadData();
      });
    }})
  };
  editTask = (id) => {
    console.log(this.props);
    this.props.history.push(`/edit/${id}`)
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

export default Todo;

