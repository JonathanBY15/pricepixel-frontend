// src/components/ColoredTitle.js
import React from 'react';
import './ColoredButton.css'; // Optional: for styling

const ColoredTitle = ({ text }) => {
  return (
    <button className="colored-button">
        <span>{text}</span> <img src='/assets/arrow.png' alt="get-started" className="get-started-arrow"/>
    </button>
  );
};

export default ColoredTitle;