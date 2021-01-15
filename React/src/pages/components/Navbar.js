import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { signoutRedirect } from "../../services/userService";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);

  function signOut() {
    signoutRedirect();
  }

  return (
    <div
      className="w-screen bg-blue-custom flex justify-center items-center fixed top-0 left-0"
      style={{ height: "80px" }}
    >
      <nav className="flex items-center justify-between w-4/5">
        <Link to="/">
          <img src={logo} alt="logo" className="h-24" />
        </Link>
        {user ? (
          <ul className="list-none flex items-center justify-between w-2/6 m-0">
            <li className="m-0">
              <Link
                to="/"
                className="text-white font-inter font-semibold hover:text-white focus:text-white tracking-normal"
                style={{ fontSize: "1.36rem" }}
              >
                Your Vehicles
              </Link>
            </li>
            <li className="m-0">
              <Link
                to="/register"
                className="text-white font-inter font-semibold hover:text-white focus:text-white tracking-normal"
                style={{ fontSize: "1.36rem" }}
              >
                Register A Vehicles
              </Link>
            </li>
            <li
              onClick={signOut}
              className="m-0 text-white font-inter font-semibold hover:text-white focus:text-white cursor-pointer tracking-normal"
              style={{ fontSize: "1.36rem" }}
            >
              Sign Out
            </li>
          </ul>
        ) : (
          ""
        )}
      </nav>
    </div>
  );
};
export default Navbar;
