import React from 'react';
import { render } from 'react-dom';
import PaymentInformationRequestFormDialog from './PaymentInformationRequestFormDialog';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';
import dateFormat from'dateformat';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const DISPLAY_COUNT = 5;

export default class PaymentInformationRequestTable extends React.Component {

  constructor() {
    super();
    this.state = { paymentInformationRequests: [], open: false };
  }

  componentDidMount() {
    this.getPaymentInformationRequestCount().then((count) => {
      console.log(count);
    });
    this.getPaymentInformationRequests().then(pir => {
      this.setState({ paymentInformationRequests: pir });
    });
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  getPaymentInformationRequestCount(condition) {
    return new Promise((success, failure) => {
      $.post('http://127.0.0.1:3000/read',
      {
        recordTypeId: 'PaymentInformationRequest',
        condition: {},
        option: { count: true }
      },
      res => {
        success(res);
      });
    });
  }

  getPaymentInformationRequests(condition, pageNumber) {
    const searchCondition = condition ? condition : {};
    const offset = DISPLAY_COUNT * (pageNumber ? pageNumber : 1);

    return new Promise((success, failure) => {
      $.post('http://127.0.0.1:3000/read',
      {
        recordTypeId: 'PaymentInformationRequest',
        condition: {},
        option: { limit: DISPLAY_COUNT, offset }
      },
      res => {
        success(res);
      });
    });
  }

  render() {
    return (
      <div>
        <FlatButton
          label="追加する"
          labelPosition="after"
          primary={true}
          icon={<ContentAdd />}
          onTouchTap={this.handleOpen}
        />
        <PaymentInformationRequestFormDialog
          open={this.state.open}
          onRequestClose={this.handleClose}/>
        <Table>
            <TableHeader displaySelectAll={false}>
            <TableRow>
                <TableHeaderColumn>店舗ID</TableHeaderColumn>
                <TableHeaderColumn>ステータス</TableHeaderColumn>
                <TableHeaderColumn>報告日</TableHeaderColumn>
            </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
            {this.state.paymentInformationRequests.map(r => 
                <TableRow>
                    <TableRowColumn>{r.shopId}</TableRowColumn>
                    <TableRowColumn>{r.status}</TableRowColumn>
                    <TableRowColumn>{dateFormat(new Date(r.date),'yyyy年m月d日 H:MM')}</TableRowColumn>
                </TableRow>)}
            </TableBody>
        </Table>
      </div>
    );
  }
}