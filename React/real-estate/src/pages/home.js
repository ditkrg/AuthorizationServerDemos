import React from "react";
import { Switch, Route } from "react-router-dom";
import RegisterVehicle from "./RegisterVehicle";
import YourVehicles from "./YourVehicles";

function Home() {
  return (
    <Switch>
      <Route path="/register">
        <RegisterVehicle />
      </Route>
      <Route path="/">
        <YourVehicles />
      </Route>
    </Switch>
  );
}

export default Home;
