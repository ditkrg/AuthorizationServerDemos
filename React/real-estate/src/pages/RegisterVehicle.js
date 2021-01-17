import React from "react";
import VehicleRegisterForm from "./components/VehicleRegisterForm";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const RegisterVehicle = () => {
  return (
    <div>
      <Navbar />
      <Main Component={VehicleRegisterForm} />
    </div>
  );
};

export default RegisterVehicle;
