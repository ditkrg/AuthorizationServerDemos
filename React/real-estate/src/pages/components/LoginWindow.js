import React from "react";
import Button from "./Button";
import { storeUser } from "../../actions/authActions";
import store from "../../store";
import Heading1 from "./Heading1";
import Card from "./Card";

// Services
import { signinRedirect } from "../../services/userService";

const LoginWindow = () => {
  // const onUserLogin = () => {
  //   const user = { profile: { given_name: "John Doe" } };
  //   console.log(`User logged in!`);
  //   store.dispatch(storeUser(user));
  // };

  function login() {
    signinRedirect();
  }

  return (
    <Card>
      <Heading1 text={"Real Estate Service"} />

      <p className="text-black-custom font-light text-3xl mb-20">
        Login to your account to view your dashboard and manage your real
        estate.
      </p>
      <Button onClickEvent={login} text={"Login"} />
    </Card>
  );
};

export default LoginWindow;
