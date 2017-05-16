import ReactDOM from 'react-dom';
import Home from './components/Home';
import {createHashHistory} from 'history';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}></Route>
  </Router>
), document.getElementById('root'))