import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={FriendsList} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
