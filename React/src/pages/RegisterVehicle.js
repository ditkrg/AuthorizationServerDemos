import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as apiService from "../services/apiService";

const RegisterVehicle = () => {
  const [model, setModel] = useState("");
  const [licensePlate, setlicensePlate] = useState("");
  const [color, setColor] = useState("White");
  const [type, setType] = useState(1);

  const user = useSelector((state) => state.auth.user);

  async function registerVehicle() {
    await apiService.registerVehicle(
      { model, licensePlate, color, type },
      user.access_token
    );
    // await getVehicles();
  }

  return (
    <>
      <h3>Register Vehicle:</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label>Model: </label>
          <input
            value={model}
            type="text"
            name="model"
            onChange={(e) => setModel(e.target.value)}
          />
          <label>License Plate: </label>
          <input
            value={licensePlate}
            type="text"
            name="licensePlate"
            onChange={(e) => setlicensePlate(e.target.value)}
          />
          <label>Color: </label>
          <input
            value={color}
            type="text"
            name="color"
            onChange={(e) => setColor(e.target.value)}
          />
          <label>Type: </label>
          <select
            value={type}
            name="type"
            onChange={(e) => setType(e.target.value)}
          >
            <option value="1">Sedan</option>
            <option value="2">SUV</option>
            <option value="3">Pickup</option>
          </select>
        </div>

        <button className="btn" onClick={() => registerVehicle()}>
          Register
        </button>
      </form>
    </>
  );
};

export default RegisterVehicle;
