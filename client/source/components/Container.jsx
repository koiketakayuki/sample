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

export default class Container extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"/>
            <div id="container">
              {this.props.children}
            </div>
        </div>
      </MuiThemeProvider>
    );
  }
}