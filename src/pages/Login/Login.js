// src/pages/Login.js
import React, { useState } from 'react';
import './Login.css'; // Optional: for styling

import LoginForm from '../../components/LoginForm/LoginForm';

const Login = () => {
  return (
    <div className="login-page">
      <LoginForm/>
    </div>
  );
};

export default Login;
