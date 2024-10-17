// src/components/LoginForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css'; // Optional: for styling


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login-form-container">
      <h1 className='login-h1'>Login</h1>
      <form className="login-form">
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

        <button type="submit" className="login-button">
          Sign In
        </button>
      </form>

      <Link to="/signup" className="new-to-pricepixel">
          <p>New To PricePixel?</p>
      </Link>
    </div>
  );
};

export default LoginForm;
