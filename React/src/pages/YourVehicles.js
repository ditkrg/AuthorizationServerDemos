import React, { useState, useEffect } from "react";
import * as apiService from "../services/apiService";
import { useSelector } from "react-redux";
import { prettifyJson } from "../utils/jsonUtils";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const YourVehicles = () => {
  const user = useSelector((state) => state.auth.user);
  const [vehicleData, setVehicleData] = useState(null);

  useEffect(() => {
    getVehicles();
  }, []);

  async function getVehicles() {
    console.log(user);
    const vehicles = await apiService.getVehiclesFromApi(user.access_token);
    setVehicleData(vehicles);
  }

  function getType(type) {
    switch (type) {
      case 1:
        return "Sedan";
      case 2:
        return "SUV";
      case 3:
        return "Pickup";
    }
  }

  return (
    <div className="h-screen">
      <Navbar />
      <Main
        Component={() => <h1>hello world! this is the "Your Vehicles Page"</h1>}
      />
    </div>
    // <>
    //   <h1>Traffic Police</h1>
    //   <p>Hello, {user.profile.given_name}.</p>

    //   <h3>Your Vehicles:</h3>
    //   {vehicleData ? (
    //     <ul>
    //       {vehicleData.map((v) => (
    //         <li key={v.id}>
    //           {v.color} {v.model} ({v.licensePlate}) - {getType(v.type)}
    //         </li>
    //       ))}
    //     </ul>
    //   ) : (
    //     <p>No vehicles yet :(</p>
    //   )}
    //   <pre>
    //     <code>
    //       {prettifyJson(vehicleData ? vehicleData : "No vehicles yet :(")}
    //     </code>
    //   </pre>
    //   <p>
    //     <a
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       href="https://github.com/tappyy/react-IS4-auth-demo"
    //     >
    //       Github Repo
    //     </a>
    //   </p>
    // </>
  );
};

export default YourVehicles;
