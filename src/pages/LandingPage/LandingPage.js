// src/LandingPage.js
import React from 'react';
import InfoCard from '../../components/InfoCard/InfoCard';
import ColoredTitle from '../../components/ColoredTitle/ColoredTitle';
import ColoredButton from '../../components/ColoredButton/ColoredButton';
import LogoSlider from '../../components/LogoSlider/LogoSlider';
import SubTitle from '../../components/SubTitle/SubTitle';
import './LandingPage.css';

const LandingPage = () => {
  return (
  <div className="landing-page">
    <ColoredTitle text="PricePixel"/>

    <SubTitle text="Your one-stop destination for tracking game prices across multiple stores."/>

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
        title="Price Comparison" 
        description="Compare prices from various stores for the best offers." 
        icon={'/assets/price.png'}
    />
    </div>

    <LogoSlider />

  </div>

  );
};

export default LandingPage;

