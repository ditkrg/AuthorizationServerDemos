import React from "react";
import Button from "./Button";
import { storeUser } from "../../actions/authActions";
import store from "../../store";
import Heading1 from "./Heading1";

const LoginWindow = () => {
  const onUserLogin = () => {
    const user = { profile: { given_name: "John Doe" } };
    console.log(`User logged in!`);
    store.dispatch(storeUser(user));
  };

  return (
    <div className="xl:w-1/3 lg:w-5/12 md:w-2/4 sm:w-9/12 w-11/12 flex flex-col justify-center shadow md:px-32 sm:px-28 md:py-36 sm:py-36 px-20 py-16 mt-20">
      <Heading1 text={"Traffic Police Service"} />

      <p className="text-black-custom font-light text-3xl mb-20">
        Login to your account to view your dashboard and register a new vehicle.
      </p>
      <Button onClickEvent={onUserLogin} text={"Login"} />
    </div>
  );
};

export default LoginWindow;
