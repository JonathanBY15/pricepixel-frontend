// src/components/ColoredTitle.js
import React from 'react';
import './ColoredTitle.css'; // Optional: for styling

const ColoredTitle = ({ text }) => {
  return (
    <div className="colored-title">
      <h1 className="gradient-text">{text}</h1>
    </div>
  );
};

export default ColoredTitle;
