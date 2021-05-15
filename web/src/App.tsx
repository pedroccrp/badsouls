import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './styles/global.scss';

import Login from 'pages/Login';
import Register from 'pages/Register';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/'>
          <Redirect to='/login' />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
