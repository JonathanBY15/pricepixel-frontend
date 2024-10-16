// src/LandingPage.js
import React from 'react';
import InfoCard from '../../components/InfoCard/InfoCard';
import ColoredTitle from '../../components/ColoredTitle/ColoredTitle';
import ColoredButton from '../../components/ColoredButton/ColoredButton';
import LogoSlider from '../../components/LogoSlider/LogoSlider';
import './LandingPage.css';

const LandingPage = () => {
  return (
  <div className="landing-page">
    <ColoredTitle text="PricePixel"/>

    <p>Effortlessly compare prices across multiple stores to find the best deals on your favorite games, ensuring you never pay more than you need to.</p>

    <ColoredButton text="Get Started"/>

    <div className="info-card-container">
        <InfoCard 
        title="Real-Time Price Tracking" 
        description="Get instant updates on price changes across stores for the best deals." 
        icon={'/assets/piggy.png'}
        />
        <InfoCard 
        title="Wishlist Alerts" 
        description="Set price thresholds and get notified when your games drop below." 
        icon={'/assets/alert.png'}
        />
        <InfoCard 
        title="Store Comparison" 
        description="Compare prices from various stores for the best offers." 
        icon={'/assets/price.png'}
    />
    </div>

    <LogoSlider />



    



   
  </div>

  );
};

export default LandingPage;

