import React from 'react';
import {Form, Input, Button, DatePicker, Select, Modal} from 'antd'
import PropTypes from 'prop-types';
import {postTask} from "../../service/indexApi";
import styles from './style/Create.module.less';
import moment from 'moment';

const FormItem = Form.Item;
const Option = Select.Option;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

class Create extends React.Component {
  static propTypes = {};
  static defaultProps = {};
  
  componentDidMount() {
  
  };
  
  handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log(values);
        values.startTime = moment(values.startTime).format('YYYY-MM-DD');
        values.endTime = moment(values.endTime).format('YYYY-MM-DD');
        postTask(values).then((data) => {
          Modal.success({content: '添加事件成功！'});
          console.log(data);
        });
      }
    });
  };
  
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.new}>
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label="事件描述"
          >
            {getFieldDecorator('name', {
              rules: [{
                required: true, message: '请输入事件描述',
              }, {
                max: 500, message: '长度最大为500个字符'
              }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="事件开始时间"
          >
            {getFieldDecorator('startTime', {
              rules: [{
                required: true, message: '请输入事件开始时间',
              }],
            })(
              <DatePicker />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="事件结束时间"
          >
            {getFieldDecorator('endTime', {
              rules: [{
                required: true, message: '请输入事件结束时间',
              }],
            })(
              <DatePicker />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="事件紧急程度"
          >
            {getFieldDecorator('priority', {
              rules: [{
                required: true, message: '请选择时间紧急程度',
              }],
            })(
              <Select style={{ width: 120 }} onChange={this.handleChange}>
                <Option value="0">紧急</Option>
                <Option value="1">一般</Option>
                <Option value="2">不紧急</Option>
              </Select>
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">提交</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Form.create()(Create);

