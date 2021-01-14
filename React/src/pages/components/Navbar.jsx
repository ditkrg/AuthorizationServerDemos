import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div
      className="w-100 bg-blue-custom flex justify-center items-center"
      style={{ height: '90px' }}
    >
      <nav className="flex items-center justify-between w-4/5">
        <img src={logo} alt="logo" className="h-28" />
        {user ? (
          <ul className="list-none flex items-center justify-between w-1/5 m-0">
            <li className="m-0">
              <Link
                to="/vehicles"
                className="text-white font-inter text-xl font-semibold hover:text-white"
              >
                Your Vehicles
              </Link>
            </li>
            <li className="m-0">
              <Link
                to="/register"
                className="text-white font-inter text-xl font-semibold hover:text-white"
              >
                Register A Vehicles
              </Link>
            </li>
          </ul>
        ) : (
          ''
        )}
      </nav>
    </div>
  );
};
export default Navbar;
