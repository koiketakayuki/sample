import React from 'react';
import { render } from 'react-dom';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import DatePicker from 'material-ui/DatePicker';
import MenuItem from 'material-ui/MenuItem';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class PaymentInformationRequestForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      shopId: "",
      status: null,
    };
  }

  handleChange = (event, index, status) => this.setState({status});

  render() {
    const actions = [
      <FlatButton
        label="キャンセル"
        primary={true}
        onTouchTap={this.props.onRequestClose}
      />,
      <FlatButton
        label="作成"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.props.onRequestClose}
      />,
    ];

    return (
      <div>
        <Dialog
          title="口振やりとり作成"
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.onRequestClose}
        >
          <TextField
            floatingLabelText="店舗ID"
            hintText="店舗ID"
            />
          <SelectField
            floatingLabelText="ステータス"
            value={this.state.status}
            onChange={this.handleChange}
          >
            <MenuItem value="受領" primaryText="受領" />
            <MenuItem value="再提出依頼" primaryText="再提出依頼" />
          </SelectField>
          <DatePicker hintText="Landscape Inline Dialog" container="inline" locale="ja"/>
        </Dialog>
      </div>
    );
  }
}