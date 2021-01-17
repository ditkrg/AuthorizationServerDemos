import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// Services
import * as apiService from "../../services/apiService";

// Components
import Heading1 from "./Heading1";
import Heading3 from "./Heading3";
import Button from "./Button";
import Table from "./table/Table";

const VehiclesMain = () => {
  const user = useSelector((state) => state.auth.user);

  const history = useHistory();

  const [vehicleData, setVehicleData] = useState(null);

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
    <div
      className={`flex flex-col xl:w-2/3 lg:w-4/5 w-11/12 ${
        !vehicleData && "items-center"
      }`}
    >
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
          <div className="flex justify-between items-center">
            <Heading3>Your Vehicles:</Heading3>
            <Button
              text="Register A Vehicle"
              // classes={vehicleData && "self-start"}
              onClickEvent={() => history.push("/register")}
            />
          </div>
          <Table vehicleData={vehicleData} />
        </>
      ) : (
        <h3 className="font-light font-inter text-black-custom my-32 self-center">
          No vehicles yet.
        </h3>
      )}
      {!vehicleData && (
        <Button
          text="Register A Vehicle"
          onClickEvent={() => history.push("/register")}
        />
      )}
    </div>
  );
};

export default VehiclesMain;
