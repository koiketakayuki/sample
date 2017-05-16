import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Grid, Row, Col } from 'react-bootstrap';
import {Card, CardActions, CardHeader, CardText, CardMedia} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router';
import GroupIcon from 'material-ui/svg-icons/social/group';
import HomeIcon from 'material-ui/svg-icons/action/home';
import FaceIcon from 'material-ui/svg-icons/action/face';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const DISPLAY_COUNT = 10;

export default class Home extends React.Component {

  constructor() {
    super();
    this.initializePager();
    this.state = { paymentInformationRequests: [] };
  }

  initializePager() {

  }

  getPaymentInformationRequests(condition, pageNumber) {
    const searchCondition = condition ? condition : {};
    const offset = DISPLAY_COUNT * (pageNumber ? pageNumber : 1);

    return new Promise((success, failure) => {
      $.post('http://127.0.0.1:3000/read/payment-information-request',
      { condition: {}, option: { limit: DISPLAY_COUNT, offset } },
      res => {
        success(res);
      });
    });
  }

  componentDidMount() {
    this.getPaymentInformationRequests().then(pir => {
      this.setState({ paymentInformationRequests: pir });
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            iconElementRight=
            {<FlatButton
              label="追加する"
              labelPosition="after"
              primary={true}
              icon={<ContentAdd />}
              />}
          />
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>店舗ID</TableHeaderColumn>
                <TableHeaderColumn>ステータス</TableHeaderColumn>
                <TableHeaderColumn>報告日</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {this.state.paymentInformationRequests.map(r => 
              <TableRow>
                <TableRowColumn>{r.shopId}</TableRowColumn>
                <TableRowColumn>{r.status}</TableRowColumn>
                <TableRowColumn>{r.date}</TableRowColumn>
              </TableRow>)}
            </TableBody>
          </Table>
        </div>
      </MuiThemeProvider>
    );
  }
}