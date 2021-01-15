import React from "react";
import Button from "./Button";
import { storeUser } from "../../actions/authActions";
import store from "../../store";
import Heading1 from "./Heading1";
import Card from "./Card";

const LoginContent = () => {
  const onUserLogin = () => {
    const user = { profile: { given_name: "John Doe" } };
    console.log(`User logged in!`);
    store.dispatch(storeUser(user));
  };

  return (
    <>
      <Heading1 text={"Traffic Police Service"} />

      <p className="text-black-custom font-light text-3xl mb-20">
        Login to your account to view your dashboard and register a new vehicle.
      </p>
      <Button onClickEvent={onUserLogin} text={"Login"} />
    </>
  );
};

const LoginWindow = () => {
  return <Card component={LoginContent} />;
};

export default LoginWindow;
