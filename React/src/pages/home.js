import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import RegisterVehicle from "./RegisterVehicle";
import YourVehicles from "./YourVehicles";

function Home() {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <RegisterVehicle />
        </Route>
        <Route path="/">
          <YourVehicles />
        </Route>
      </Switch>
    </Router>
  );
}

export default Home;
