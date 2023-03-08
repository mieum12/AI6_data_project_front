import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import shelterPage from './src/pages/shelter/shelterPage'

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/shelterPage" component={shelterPage} />
        </Switch>
      </Router>
    );
  }
}