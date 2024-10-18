// src/MainPage.js
import React from 'react';
import InfoCard from '../../components/InfoCard/InfoCard';
import ColoredTitle from '../../components/ColoredTitle/ColoredTitle';
import ColoredButton from '../../components/ColoredButton/ColoredButton';
import LogoSlider from '../../components/LogoSlider/LogoSlider';
import SubTitle from '../../components/SubTitle/SubTitle';
import GamePriceCard from '../../components/GamePriceCard/GamePriceCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import './MainPage.css';


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

const MainPage = () => {

    const handleSearch = (searchTerm) => {
        console.log(`Searching for: ${searchTerm}`);
        // You can handle the search logic here
    };
  return (
  <div className="landing-page">
        

    <SearchBar onSearch={handleSearch} />

    <div className="outer-container">
        <div className="game-price-card-container">
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1174180//capsule_sm_120.jpg?t=1720558643" 
                gameTitle="Red Dead Redemption 2" 
                stores={stores} 
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
                stores={stores} 
                />
            </div>
            <div>
                <GamePriceCard 
                gameImage="https:\/\/shared.cloudflare.steamstatic.com\/store_item_assets\/steam\/apps\/1222140\/capsule_sm_120.jpg?t=1667468479" 
                gameTitle="Detroit: Become Human" 
                stores={stores} 
                />
            </div>
        </div>

        <div className="game-price-card-container">
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1174180//capsule_sm_120.jpg?t=1720558643" 
                gameTitle="Red Dead Redemption 2" 
                stores={stores} 
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
                stores={stores} 
                />
            </div>
            <div>
                <GamePriceCard 
                gameImage="https:\/\/shared.cloudflare.steamstatic.com\/store_item_assets\/steam\/apps\/1222140\/capsule_sm_120.jpg?t=1667468479" 
                gameTitle="Detroit: Become Human" 
                stores={stores} 
                />
            </div>
        </div>

        <div className="game-price-card-container">
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1174180//capsule_sm_120.jpg?t=1720558643" 
                gameTitle="Red Dead Redemption 2" 
                stores={stores} 
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
                stores={stores} 
                />
            </div>
            <div>
                <GamePriceCard 
                gameImage="https:\/\/shared.cloudflare.steamstatic.com\/store_item_assets\/steam\/apps\/1222140\/capsule_sm_120.jpg?t=1667468479" 
                gameTitle="Detroit: Become Human" 
                stores={stores} 
                />
            </div>
        </div>

        <div className="game-price-card-container">
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1174180//capsule_sm_120.jpg?t=1720558643" 
                gameTitle="Red Dead Redemption 2" 
                stores={stores} 
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
                stores={stores} 
                />
            </div>
            <div>
                <GamePriceCard 
                gameImage="https:\/\/shared.cloudflare.steamstatic.com\/store_item_assets\/steam\/apps\/1222140\/capsule_sm_120.jpg?t=1667468479" 
                gameTitle="Detroit: Become Human" 
                stores={stores} 
                />
            </div>
        </div>

        <div className="game-price-card-container">
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1174180//capsule_sm_120.jpg?t=1720558643" 
                gameTitle="Red Dead Redemption 2" 
                stores={stores} 
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
                stores={stores} 
                />
            </div>
            <div>
                <GamePriceCard 
                gameImage="https:\/\/shared.cloudflare.steamstatic.com\/store_item_assets\/steam\/apps\/1222140\/capsule_sm_120.jpg?t=1667468479" 
                gameTitle="Detroit: Become Human" 
                stores={stores} 
                />
            </div>
        </div>
    </div>


  </div>

  );
};

export default MainPage;

