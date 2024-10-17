// src/components/SignupForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignupForm.css'; // Optional: for styling

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="signup-form-container">
      <h1 className='signup-h1'>Signup</h1>
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password-repeat">Repeat Password</label>
          <input
            type="password"
            id="password-repeat"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Repeat your password"
          />
        </div>

        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>

    <Link to="/login" className="has-account">
        <p>Already have an account? Login.</p>
    </Link>
    </div>
  );
};

export default SignupForm;