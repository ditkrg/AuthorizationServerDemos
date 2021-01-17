import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import LoginWindow from "./components/LoginWindow";

function Login() {
  const user = useSelector((state) => state.auth.user);

  const location = useLocation();
  const history = useHistory();

  let { from } = location.state || { from: { pathname: "/" } };

  if (user) {
    history.replace(from);
  }

  return (
    !user && (
      <div>
        <Navbar />
        <Main Component={LoginWindow} />
      </div>
    )
  );
}

export default Login;
