// src/FavoritesPage.js
import React, { useEffect, useState } from 'react';
import GamePriceCard from '../../components/GamePriceCard/GamePriceCard';
import ColoredTitle from '../../components/ColoredTitle/ColoredTitle';
import { storeNames, storeIcons } from '../../utils/storeData'; // Adjust the path as needed
import axios from 'axios';
import './FavoritesPage.css';

const FavoritesPage = () => {
    const [gameData, setGameData] = useState([]); // State for game data
    const gameIds = ['206736', '248711', '241934', '144158']; // List of game IDs to fetch (example IDs)
  
    const fetchGameData = async (id) => {
      try {
        const response = await axios.get(`https://www.cheapshark.com/api/1.0/games?id=${id}`);
        const { info, deals } = response.data;
  
        const storeData = deals.map(deal => ({
          storeName: storeNames[deal.storeID], // Convert store ID to store name
          storeIcon: storeIcons[deal.storeID], // Convert store ID to store icon
          price: deal.price,
        }));
  
        // Return the game information including the title, image, and stores
        return {
          title: info.title,
          image: info.thumb,
          stores: storeData,
        };
      } catch (error) {
        console.error('Error fetching game data:', error);
        return null; // Return null in case of error
      }
    };
  
    const fetchAllGameData = async () => {
      const promises = gameIds.map(id => fetchGameData(id)); // Fetch all game data
      const results = await Promise.all(promises);
      setGameData(results.filter(game => game !== null)); // Filter out any null results
    };
  
    useEffect(() => {
      fetchAllGameData();
    }, []);
  
    return (
      <div className="favorites-page">
        <ColoredTitle text="Notifications" />
  
        <div className="game-price-card-container">
          {gameData.map((game, index) => (
            <GamePriceCard 
              key={index} // Use index or a unique identifier
              gameImage={game.image} // Use the dynamic game image
              gameTitle={game.title} // Use the dynamic game title
              stores={game.stores} 
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default FavoritesPage;