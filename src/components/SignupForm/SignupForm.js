// src/components/SignupForm.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignupForm.css'; // Optional: for styling

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // To redirect after successful signup

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (password !== repeatPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      const data = await response.json();
      // Optionally store token or handle redirect
      localStorage.setItem('token', data.token);
      navigate('/'); // Redirect to login after signup
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signup-form-container">
      <h1 className='signup-h1'>Signup</h1>
      <form className="signup-form" onSubmit={handleSignup}>
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
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            placeholder="Repeat your password"
          />
        </div>

        {error && <p className="error-message">{error}</p>} {/* Display error if signup fails */}

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
