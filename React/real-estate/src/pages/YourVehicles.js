import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import VehiclesMain from "./components/VehiclesMain";

const YourVehicles = () => {
  return (
    <div>
      <Navbar />
      <Main Component={VehiclesMain} />
    </div>
  );
};

export default YourVehicles;
