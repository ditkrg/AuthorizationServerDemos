import React from 'react';
import { signinRedirect } from '../services/userService';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Main from './components/Main';
import VehicleRegisterForm from './components/VehicleRegisterForm';

function Login() {
  const user = useSelector((state) => state.auth.user);

  function login() {
    signinRedirect();
  }

  return user ? (
    <Redirect to={'/'} />
  ) : (
    <div className="h-screen">
      <Navbar />
      <Main Component={VehicleRegisterForm} />
    </div>
  );
}

export default Login;
