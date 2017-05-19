import ReactDOM from 'react-dom';
import Container from './components/Container';
import PaymentInformationRequestTable from './components/PaymentInformationRequestTable';
import {createHashHistory} from 'history';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
injectTapEventPlugin();

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Container}>
      <IndexRoute component={PaymentInformationRequestTable} />
    </Route>
  </Router>
), document.getElementById('root'))