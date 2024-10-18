// src/components/NavBar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css'; // Optional: for styling

const NavBar = () => {
  const navigate = useNavigate(); // For programmatic navigation
  const isLoggedIn = !!localStorage.getItem('token'); // Check if token exists in localStorage

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <h1>PricePixel</h1>
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link to="/home" className="navbar-link">Home</Link>
          </li>
          {isLoggedIn ? (
            <li>
              <Link 
                to="/login" // This sets the destination for the link
                className="navbar-link"
                onClick={handleLogout} // Call handleLogout on click
              >
                Sign Out
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login" className="navbar-link">Login</Link>
              </li>
              <li>
                <Link to="/signup" className="navbar-link">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
