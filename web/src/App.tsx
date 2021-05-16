import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './styles/global.scss';

import Header from 'components/Header';

import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';

function App() {
  return (
    <Router>
      <Header />
      <div id='app'>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
