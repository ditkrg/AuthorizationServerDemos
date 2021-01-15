import React, { useState } from "react";
import { useSelector } from "react-redux";

// Services
import * as apiService from "../../services/apiService";

// Components
import Card from "./Card";
import Heading3 from "./Heading3";
import Button from "./Button";
import InputText from "./inputs/InputText";
import InputSelect from "./inputs/InputSelect";

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
    <Card styles={{ padding: "60px" }} classes="xl:w-2/5">
      <form onSubmit={(e) => e.preventDefault()} className="m-0 flex flex-col">
        <Heading3 styles={{ marginTop: "0" }}>Register A Vehicle</Heading3>

        <div className="flex flex-col">
          <InputText
            label="Model"
            value={model}
            name="model"
            placeholder="Model"
            onChangeEvent={(e) => setModel(e.target.value)}
          />
          <InputText
            label="License Plate"
            value={licensePlate}
            name="licensePlate"
            placeholder="License Plate"
            onChangeEvent={(e) => setlicensePlate(e.target.value)}
          />
          <InputText
            label="Color"
            value={color}
            name="color"
            placeholder="Color"
            onChangeEvent={(e) => setColor(e.target.value)}
          />
          <InputSelect
            label="Type"
            value={type}
            name="type"
            onChangeEvent={(e) => setType(e.target.value)}
            options={[
              { value: "1", text: "Sedan" },
              { value: "2", text: "SUV" },
              { value: "3", text: "Pickup" },
            ]}
          />
        </div>
        <Button
          text="Register"
          onClickEvent={registerVehicle}
          classes="mt-10"
        />
      </form>
    </Card>
  );
};

export default VehicleRegisterForm;
