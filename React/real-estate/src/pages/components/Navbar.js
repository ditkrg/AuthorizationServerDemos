import React, { useState } from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoMdMenu } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

// Services
import { signoutRedirect } from "../../services/userService";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 950px)" });

  const user = useSelector((state) => state.auth.user);

  function signOut() {
    signoutRedirect();
  }

  return (
    <div
      className="w-screen bg-blue-custom flex justify-center items-center fixed top-0 left-0"
      style={{ height: "80px" }}
    >
      <nav className="flex items-center justify-between xl:w-4/5 w-10/12">
        <Link to="/">
          <img src={logo} alt="logo" className="h-24" />
        </Link>
        {user ? (
          <>
            <IoMdMenu
              onClick={() =>
                isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
              }
              className={`text-5xl text-white hidden hamburger-menu cursor-pointer ${
                isMenuOpen ? "text-blue-custom" : ""
              }`}
            />
            <ul
              className="list-none flex items-center justify-between m-0 navbar-list"
              style={
                isMobile
                  ? isMenuOpen
                    ? { display: "flex" }
                    : { display: "none" }
                  : { display: "flex" }
              }
            >
              <li className="m-0">
                <Link
                  to="/"
                  className="text-white font-inter font-semibold hover:text-white focus:text-white tracking-normal mr-20"
                  style={{ fontSize: "1.335rem" }}
                >
                  Your Vehicles
                </Link>
              </li>
              <li className="m-0">
                <Link
                  to="/register"
                  className="text-white font-inter font-semibold hover:text-white focus:text-white tracking-normal mr-20"
                  style={{ fontSize: "1.335rem" }}
                >
                  Register A Vehicles
                </Link>
              </li>
              <li
                onClick={signOut}
                className="m-0 text-white font-inter font-semibold hover:text-white focus:text-white cursor-pointer tracking-normal"
                style={{ fontSize: "1.335rem" }}
              >
                Sign Out
              </li>
            </ul>
          </>
        ) : (
          ""
        )}
      </nav>
    </div>
  );
};
export default Navbar;
