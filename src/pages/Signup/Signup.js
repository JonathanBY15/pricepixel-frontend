// src/pages/Signup.js
import React, { useState } from 'react';
import './Signup.css'; // Optional: for styling

import SignupForm from '../../components/SignupForm/SignupForm';

const Signup = () => {
  return (
    <div className="signup-page">
      <SignupForm/>
    </div>
  );
};

export default Signup;
