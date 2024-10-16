// src/components/InfoCard.js
import React from 'react';
import './InfoCard.css'; // Optional: for styling

const InfoCard = ({ title, description, icon }) => {
  return (
    <div className="info-card">
      {/* <img src={icon} alt={`${title} icon`} className="info-card-icon" /> */}
      <div className="info-card-icon">{icon}</div>
      <h3 className="info-card-title">{title}</h3>
      <p className="info-card-description">{description}</p>
    </div>
  );
};

export default InfoCard;
