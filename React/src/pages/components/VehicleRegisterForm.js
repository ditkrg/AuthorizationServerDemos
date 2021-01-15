import React, { useState } from "react";
import { useSelector } from "react-redux";

// Services
import * as apiService from "../../services/apiService";

// Components
import Card from "./Card";
import Heading3 from "./Heading3";
import Button from "./Button";
import InputText from "./inputs/InputText";

const VehicleRegisterForm = () => {
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
    <Card styles={{ padding: "60px" }}>
      <form onSubmit={(e) => e.preventDefault()} className="m-0 flex flex-col">
        <Heading3 styles={{ marginTop: "0" }}>Register A Vehicle</Heading3>

        <div className="flex flex-col">
          <InputText
            label="Model"
            value={model}
            name="model"
            onChangeEvent={(e) => setModel(e.target.value)}
          />
          <InputText
            label="License Plate"
            value={licensePlate}
            name="licensePlate"
            onChangeEvent={(e) => setlicensePlate(e.target.value)}
          />
          <InputText
            label="Color"
            value={color}
            name="color"
            onChangeEvent={(e) => setColor(e.target.value)}
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

        <Button text="Register" onClickEvent={registerVehicle} />
      </form>
    </Card>
  );
};

export default VehicleRegisterForm;
