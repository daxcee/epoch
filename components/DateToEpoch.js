import React, { Component } from 'react';
import { DatePicker, Select, Row, Col } from 'antd';
import moment from 'moment';
const Option = Select.Option;

export default class DateToEpoch extends Component {
  constructor(props) {
    super(props);

    this.state = { datetime: moment() };

    this.onChangeDateTime = this.onChangeDateTime.bind(this);
  }

  emitEmpty = () => {
    this.dateTimeInput.focus();

    this.setState({ datetime: '' });
  };

  onChangeDateTime(value) {
    const datetime = value;

    if (datetime && !datetime.isValid()) {
      return;
    }

    const currentDate = this.state.date;

    if (currentDate && datetime.isSame(currentDate)) {
      return;
    }

    this.setState({ datetime });
  }

  render() {
    const { datetime } = this.state;

    return (
      <div className="well padding-lg margin-top-lg">
        <h3>Convert to timestamp</h3>
        <DatePicker
          style={{ width: '100%' }}
          showTime
          defaultValue={datetime}
          format="YYYY-MM-DD HH:mm:ss"
          size="large"
          name="date"
          onChange={this.onChangeDateTime}
          ref={node => (this.dateTimeInput = node)}
        />
        {/* <Select
          size="large"
          defaultValue="lucy"
          style={{ width: 192 }}
          name="select"
        >
          <Option value="jack">jack</Option>
          <Option value="lucy">lucy</Option>
          <Option value="disabled" disabled>
            disabled
          </Option>
          <Option value="yiminghe">yiminghe</Option>
        </Select> */}
        <div className="margin-top-md text-center">
          <Row gutter={16}>
            <Col span={12}>Seconds: {datetime ? datetime.format('X') : null}</Col>
            <Col span={12}>Milliseconds: {datetime ? datetime.format('x') : null}</Col>
          </Row>
        </div>
      </div>
    );
  }
}
