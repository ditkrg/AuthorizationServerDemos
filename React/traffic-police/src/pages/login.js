import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import LoginWindow from "./components/LoginWindow";

function Login() {
  const user = useSelector((state) => state.auth.user);

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
