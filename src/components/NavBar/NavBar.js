// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Optional: for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <h1>PricePixel</h1>
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link to="/login" className="navbar-link">Login</Link>
          </li>
          <li>
            <Link to="/signup" className="navbar-link">Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
