import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// Services
import * as apiService from "../../services/apiService";

// Components
import Card from "./Card";
import Heading3 from "./Heading3";
import Button from "./Button";
import InputText from "./inputs/InputText";

const VehicleRegisterForm = () => {
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");

  const user = useSelector((state) => state.auth.user);

  const history = useHistory();

  async function registerVehicle() {
    await apiService.registerVehicle(
      { address, area, citizen_upn: user.profile.sub },
      user.access_token
    );
    history.push("/");
  }

  return (
    <Card styles={{ padding: "100px 90px 100px 90px" }} classes="xl:w-2/5">
      <form onSubmit={(e) => e.preventDefault()} className="m-0 flex flex-col">
        <Heading3 styles={{ marginTop: "0" }} classes="font-playfair">
          Register Real Estate
        </Heading3>

        <div className="flex flex-col">
          <InputText
            label="Address"
            value={address}
            name="address"
            placeholder="Address"
            onChangeEvent={(e) => setAddress(e.target.value)}
          />
          <InputText
            label="Area"
            value={area}
            name="area"
            placeholder="Area"
            onChangeEvent={(e) => setArea(e.target.value)}
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
