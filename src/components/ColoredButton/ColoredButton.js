// src/components/ColoredTitle.js
import React from 'react';
import './ColoredButton.css'; // Optional: for styling

const ColoredTitle = ({ text }) => {
  return (
    <button className="colored-button">
        {text}
    </button>
  );
};

export default ColoredTitle;