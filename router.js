import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import shelterListPage from './src/pages/shelter/shelterListPage'

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/shelterListPage" component={shelterListPage} />
        </Switch>
      </Router>
    );
  }
}