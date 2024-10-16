import React from 'react';
import './LogoSlider.css'; // Import the CSS for styling

const logos = [
  '/assets/origin.png', // No need to import, as it's in the public folder
  '/assets/steam.png', // No need to import, as it's in the public folder
  '/assets/epic.png', // No need to import, as it's in the public folder
  '/assets/ea.png', // No need to import, as it's in the public folder
  '/assets/ubisoft.png', // No need to import, as it's in the public folder
  '/assets/blizzard.png', // No need to import, as it's in the public folder
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
