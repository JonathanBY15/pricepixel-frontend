import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './ColoredButton.css'; // Optional: for styling

const ColoredTitle = ({ text, className }) => {
  return (
    <Link to="/login" className={`colored-button-link ${className}`}>
      <button className="colored-button">
        <span>{text}</span>
        <img src='/assets/arrow.png' alt="get-started" className="get-started-arrow"/>
      </button>
    </Link>
  );
};

export default ColoredTitle;
