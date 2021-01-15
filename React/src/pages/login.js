import React from "react";
import { signinRedirect } from "../services/userService";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import LoginWindow from "./components/LoginWindow";

function Login() {
  const user = useSelector((state) => state.auth.user);

  function login() {
    signinRedirect();
  }

  return user ? (
    <Redirect to={"/"} />
  ) : (
    <div>
      <Navbar />
      <Main Component={LoginWindow} />
    </div>
  );
}

export default Login;
