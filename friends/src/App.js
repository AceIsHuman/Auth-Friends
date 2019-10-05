import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import Login from './components/Login';

function App() {
  return (
    <Router>
      <Link to='/login'>Login Here!</Link>
      <Switch>
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
