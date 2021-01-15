import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// Services
import * as apiService from "../../services/apiService";

// Components
import Heading1 from "./Heading1";
import Heading3 from "./Heading3";
import Button from "./Button";
import Table from "./table/Table";

const VehiclesMain = () => {
  const user = useSelector((state) => state.auth.user);

  // Initial state must be null ** Temporary **
  const [vehicleData, setVehicleData] = useState([
    {
      id: Math.floor(Math.random() * 200) + 1,
      color: "White",
      model: "Toyota Camry",
      licensePlate: "14324235",
      type: 2,
    },
    {
      id: Math.floor(Math.random() * 200) + 1,
      color: "Black",
      model: "Honda Accord",
      licensePlate: "8765658",
      type: 1,
    },
    {
      id: Math.floor(Math.random() * 200) + 1,
      color: "Beige",
      model: "Toyota Corolla",
      licensePlate: "235464",
      type: 2,
    },
    {
      id: Math.floor(Math.random() * 200) + 1,
      color: "Grey",
      model: "Toyota Yaris",
      licensePlate: "1878767",
      type: 2,
    },
    {
      id: Math.floor(Math.random() * 200) + 1,
      color: "White",
      model: "Toyota Camry",
      licensePlate: "9956443",
      type: 1,
    },
  ]);

  useEffect(() => {
    getVehicles();
    // eslint-disable-next-line
  }, []);

  async function getVehicles() {
    console.log(user);
    const vehicles = await apiService.getVehiclesFromApi(user.access_token);
    setVehicleData(vehicles);
  }

  return (
    <div className="flex flex-col">
      <Heading1
        text={"Traffic Police Service"}
        classes="mt-24"
        styles={{
          marginBottom: "0",
        }}
      />
      {/* <p>Hello, {user.profile.given_name}.</p> */}
      {vehicleData ? (
        <>
          <Heading3>Your Vehicles:</Heading3>
          <Table vehicleData={vehicleData} />
        </>
      ) : (
        <h3 className="font-light font-inter text-black-custom my-32 self-center">
          No vehicles yet.
        </h3>
      )}
      <Button
        text="Register A Vehicle"
        classes={vehicleData && "self-start my-24"}
      />
    </div>
  );
};

export default VehiclesMain;
