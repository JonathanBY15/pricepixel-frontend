import React from 'react';
import './LogoSlider.css'; // Import the CSS for styling

// Array of logos
const logos = [
  '/assets/blizzard.png',
  '/assets/ea.png',
  '/assets/epic.png',
  '/assets/fanatical.png',
  '/assets/gamesplanet.png',
  '/assets/GamersGate.png',
  '/assets/gog.png',
  '/assets/humble.png',
  '/assets/origin.png',
  '/assets/steam-blue.png',
  '/assets/ubisoft.png',
  '/assets/WinGameStore.png',
];


const LogoSlider = () => {
  return (
    <div className="logos">
      <div className="logo_items">
        {logos.map((logo, index) => (
          <img src={logo} alt={`Logo ${index}`} key={index} />
        ))}
      </div>
      <div className="logo_items">
        {logos.map((logo, index) => (
          <img src={logo} alt={`Logo ${index}`} key={index + logos.length} />
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
