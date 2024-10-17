// src/LandingPage.js
import React from 'react';
import InfoCard from '../../components/InfoCard/InfoCard';
import ColoredTitle from '../../components/ColoredTitle/ColoredTitle';
import ColoredButton from '../../components/ColoredButton/ColoredButton';
import LogoSlider from '../../components/LogoSlider/LogoSlider';
import SubTitle from '../../components/SubTitle/SubTitle';
import GamePriceCard from '../../components/GamePriceCard/GamePriceCard';
import './LandingPage.css';


const stores = [
  { name: 'Steam', price: '29.99' },
  { name: 'Epic Games', price: '27.99' },
  { name: 'Gog', price: '30.99' },
  { name: 'Origin', price: '30.99' },
  { name: 'Origin', price: '30.99' },
  { name: 'Origin', price: '30.99' },
  { name: 'Origin', price: '30.99' },
  { name: 'Origin', price: '30.99' },
  { name: 'Origin', price: '30.99' },
  { name: 'Origin', price: '30.99' },
  { name: 'Origin', price: '30.99' },
  { name: 'Origin', price: '30.99' },
  { name: 'Origin', price: '30.99' },
];

const rdr_stores = [
  { name: 'Steam', price: '29.99' },
  { name: 'Epic Games', price: '27.99' },
  { name: 'Gog', price: '30.99' },
  { name: 'Origin', price: '30.99' },
];

const detroit_stores = [
  { name: 'Steam', price: '29.99' },
  { name: 'Epic Games', price: '27.99' },
  { name: 'Gog', price: '30.99' },
  { name: 'Origin', price: '30.99' },
  { name: 'Origin', price: '30.99' },
  { name: 'Origin', price: '30.99' },
  { name: 'Origin', price: '30.99' },
];

const cyb_stores = [
  { name: 'Steam', price: '29.99' },
  { name: 'Epic Games', price: '27.99' },
  { name: 'Gog', price: '30.99' },
  { name: 'Origin', price: '30.99' },
  { name: 'Origin', price: '30.99' },
  { name: 'Origin', price: '30.99' },
  { name: 'Origin', price: '30.99' },
  { name: 'Origin', price: '30.99' },
  { name: 'Origin', price: '30.99' },
  { name: 'Origin', price: '30.99' },
  { name: 'Origin', price: '30.99' },
  { name: 'Origin', price: '30.99' },
  { name: 'Origin', price: '30.99' },
  { name: 'Origin', price: '30.99' },
  { name: 'Origin', price: '30.99' },
  { name: 'Origin', price: '30.99' },
  { name: 'Origin', price: '30.99' },
  { name: 'Origin', price: '30.99' },
  { name: 'Origin', price: '30.99' },
];

const LandingPage = () => {
  return (
  <div className="landing-page">
    <ColoredTitle text="PricePixel"/>

    <SubTitle text="Your one-stop destination for finding the best game prices."/>

    <ColoredButton text="Get Started"/>

    <div className="info-card-container">
        <InfoCard 
        title="Price Comparison" 
        description="Compare prices from various stores to find the best offers." 
        icon={'/assets/piggy.png'}
        />
        <InfoCard 
        title="Wishlist Alerts" 
        description="Set price thresholds and get notified when your favorite games drop below." 
        icon={'/assets/alert.png'}
        />
        <InfoCard 
        title="Real-Time Prices" 
        description="View current prices across stores for the best deals." 
        icon={'/assets/time.png'}
        />
    </div>

    <LogoSlider />

    <SubTitle text="Popular Games"/>

    <div className="game-price-card-container">
      <div>
        <GamePriceCard 
          gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1174180//capsule_sm_120.jpg?t=1720558643" 
          gameTitle="Red Dead Redemption 2" 
          stores={rdr_stores} 
        />
      </div>
      <div>
        <GamePriceCard 
          gameImage="https:\/\/shared.cloudflare.steamstatic.com\/store_item_assets\/steam\/apps\/213330\/capsule_sm_120.jpg?t=1726531114" 
          gameTitle="LEGO Batman 2: DC Super Heroes" 
          stores={stores} 
        />
      </div>
      <div>
        <GamePriceCard 
          gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1091500//capsule_sm_120.jpg?t=1726188854" 
          gameTitle="Cyberpunk 2077" 
          stores={cyb_stores} 
        />
      </div>
      <div>
        <GamePriceCard 
          gameImage="https:\/\/shared.cloudflare.steamstatic.com\/store_item_assets\/steam\/apps\/1222140\/capsule_sm_120.jpg?t=1667468479" 
          gameTitle="Detroit: Become Human" 
          stores={detroit_stores} 
        />
      </div>
      
    </div>    

  </div>

  );
};

export default LandingPage;

