// src/MainPage.js
import React from 'react';
import GamePriceCard from '../../components/GamePriceCard/GamePriceCard';
import ColoredTitle from '../../components/ColoredTitle/ColoredTitle';
import SubTitle from '../../components/SubTitle/SubTitle';
import './FavoritesPage.css';


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

const FavoritesPage = () => {
  return (
    <div className="favorites-page">
        <ColoredTitle text="Favorites"/>

        <div className="game-price-card-container">
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1091500//capsule_sm_120.jpg?t=1726188854" 
                gameTitle="Cyberpunk 2077" 
                stores={stores} 
                />
            </div>
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
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1174180//capsule_sm_120.jpg?t=1720558643" 
                gameTitle="Red Dead Redemption 2" 
                stores={stores} 
                />
            </div>
        </div>

        <div className="game-price-card-container">
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1091500//capsule_sm_120.jpg?t=1726188854" 
                gameTitle="Cyberpunk 2077" 
                stores={stores} 
                />
            </div>
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
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1174180//capsule_sm_120.jpg?t=1720558643" 
                gameTitle="Red Dead Redemption 2" 
                stores={stores} 
                />
            </div>
        </div>

        <div className="game-price-card-container">
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1091500//capsule_sm_120.jpg?t=1726188854" 
                gameTitle="Cyberpunk 2077" 
                stores={stores} 
                />
            </div>
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
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1174180//capsule_sm_120.jpg?t=1720558643" 
                gameTitle="Red Dead Redemption 2" 
                stores={stores} 
                />
            </div>
        </div>

        <div className="game-price-card-container">
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1091500//capsule_sm_120.jpg?t=1726188854" 
                gameTitle="Cyberpunk 2077" 
                stores={stores} 
                />
            </div>
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
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1174180//capsule_sm_120.jpg?t=1720558643" 
                gameTitle="Red Dead Redemption 2" 
                stores={stores} 
                />
            </div>
        </div>

        <div className="game-price-card-container">
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1091500//capsule_sm_120.jpg?t=1726188854" 
                gameTitle="Cyberpunk 2077" 
                stores={stores} 
                />
            </div>
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
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1174180//capsule_sm_120.jpg?t=1720558643" 
                gameTitle="Red Dead Redemption 2" 
                stores={stores} 
                />
            </div>
        </div>

        <div className="game-price-card-container">
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1091500//capsule_sm_120.jpg?t=1726188854" 
                gameTitle="Cyberpunk 2077" 
                stores={stores} 
                />
            </div>
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
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1174180//capsule_sm_120.jpg?t=1720558643" 
                gameTitle="Red Dead Redemption 2" 
                stores={stores} 
                />
            </div>
        </div>

        <div className="game-price-card-container">
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1091500//capsule_sm_120.jpg?t=1726188854" 
                gameTitle="Cyberpunk 2077" 
                stores={stores} 
                />
            </div>
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
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1174180//capsule_sm_120.jpg?t=1720558643" 
                gameTitle="Red Dead Redemption 2" 
                stores={stores} 
                />
            </div>
        </div>

        <div className="game-price-card-container">
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1091500//capsule_sm_120.jpg?t=1726188854" 
                gameTitle="Cyberpunk 2077" 
                stores={stores} 
                />
            </div>
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
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1174180//capsule_sm_120.jpg?t=1720558643" 
                gameTitle="Red Dead Redemption 2" 
                stores={stores} 
                />
            </div>
        </div>

        <div className="game-price-card-container">
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1091500//capsule_sm_120.jpg?t=1726188854" 
                gameTitle="Cyberpunk 2077" 
                stores={stores} 
                />
            </div>
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
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1174180//capsule_sm_120.jpg?t=1720558643" 
                gameTitle="Red Dead Redemption 2" 
                stores={stores} 
                />
            </div>
        </div>

        <div className="game-price-card-container">
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1091500//capsule_sm_120.jpg?t=1726188854" 
                gameTitle="Cyberpunk 2077" 
                stores={stores} 
                />
            </div>
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
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1174180//capsule_sm_120.jpg?t=1720558643" 
                gameTitle="Red Dead Redemption 2" 
                stores={stores} 
                />
            </div>
        </div>

        <div className="game-price-card-container">
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1091500//capsule_sm_120.jpg?t=1726188854" 
                gameTitle="Cyberpunk 2077" 
                stores={stores} 
                />
            </div>
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
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1174180//capsule_sm_120.jpg?t=1720558643" 
                gameTitle="Red Dead Redemption 2" 
                stores={stores} 
                />
            </div>
        </div>

        <div className="game-price-card-container">
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1091500//capsule_sm_120.jpg?t=1726188854" 
                gameTitle="Cyberpunk 2077" 
                stores={stores} 
                />
            </div>
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
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1174180//capsule_sm_120.jpg?t=1720558643" 
                gameTitle="Red Dead Redemption 2" 
                stores={stores} 
                />
            </div>
        </div>

        <div className="game-price-card-container">
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1091500//capsule_sm_120.jpg?t=1726188854" 
                gameTitle="Cyberpunk 2077" 
                stores={stores} 
                />
            </div>
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
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1174180//capsule_sm_120.jpg?t=1720558643" 
                gameTitle="Red Dead Redemption 2" 
                stores={stores} 
                />
            </div>
        </div>

        <div className="game-price-card-container">
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1091500//capsule_sm_120.jpg?t=1726188854" 
                gameTitle="Cyberpunk 2077" 
                stores={stores} 
                />
            </div>
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
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1174180//capsule_sm_120.jpg?t=1720558643" 
                gameTitle="Red Dead Redemption 2" 
                stores={stores} 
                />
            </div>
        </div>

        <div className="game-price-card-container">
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1091500//capsule_sm_120.jpg?t=1726188854" 
                gameTitle="Cyberpunk 2077" 
                stores={stores} 
                />
            </div>
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
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1174180//capsule_sm_120.jpg?t=1720558643" 
                gameTitle="Red Dead Redemption 2" 
                stores={stores} 
                />
            </div>
        </div>

        <div className="game-price-card-container">
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1091500//capsule_sm_120.jpg?t=1726188854" 
                gameTitle="Cyberpunk 2077" 
                stores={stores} 
                />
            </div>
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
            <div>
                <GamePriceCard 
                gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1174180//capsule_sm_120.jpg?t=1720558643" 
                gameTitle="Red Dead Redemption 2" 
                stores={stores} 
                />
            </div>
        </div>
    </div>

  );
};

export default FavoritesPage;

