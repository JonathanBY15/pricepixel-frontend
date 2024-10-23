import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './ColoredButton.css'; // Optional: for styling

const ColoredButton = ({ text, className, route = "/login" }) => { // route defaults to "/login"
  return (
    <Link to={route} className={`colored-button-link ${className}`}>
      <button className="colored-button">
        <span>{text}</span>
        <img src='/assets/arrow.png' alt="get-started" className="get-started-arrow" />
      </button>
    </Link>
  );
};

export default ColoredButton;
