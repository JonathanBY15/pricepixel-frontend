import React, { useState } from 'react';
import SubTitle from '../../components/SubTitle/SubTitle';
import ColoredTitle from '../../components/ColoredTitle/ColoredTitle';
import GameCatalog from '../../components/GameCatalog/GameCatalog';
import { storeNames, storeIcons } from '../../utils/storeData'; // Adjust the path as needed
import SearchBar from '../../components/SearchBar/SearchBar';
import axios from 'axios';
import './MainPage.css';

const MainPage = () => {
    const [gameData, setGameData] = useState([]); // State for game data
    const [loading, setLoading] = useState(false); // State for loading status

    const fetchGameData = async (ids) => {
        try {
            setLoading(true); // Set loading to true when fetching data
            const limitedIds = ids.slice(0, 25).join(',');
            const response = await axios.get(`https://www.cheapshark.com/api/1.0/games?ids=${limitedIds}`);
            const games = response.data;

            const processedGameData = Object.values(games).map(game => ({
                title: game.info.title,
                image: game.info.thumb,
                stores: game.deals.map(deal => ({
                    storeName: storeNames[deal.storeID],
                    storeIcon: storeIcons[deal.storeID],
                    price: deal.price,
                })),
            }));

            setGameData(processedGameData);
        } catch (error) {
            console.error('Error fetching game data:', error);
            setGameData([]); // Reset game data in case of an error
        } finally {
            setLoading(false); // Set loading to false after fetching
        }
    };

    const handleSearch = async (searchTerm) => {
        console.log(`Searching for: ${searchTerm}`);
        setGameData([]); // Reset game data

        try {
            const response = await axios.get(`https://www.cheapshark.com/api/1.0/games?title=${searchTerm}`);
            const games = response.data; // Adjust according to the actual response structure

            if (games.length > 0) {
                const ids = games.map(game => game.gameID); // Extract game IDs
                console.log('Game IDs from search result:', ids); // Log the game IDs
                await fetchGameData(ids); // Fetch multiple game data with the new IDs
            } else {
                console.error('No games found for the given search term.');
                setGameData([]); // Reset game data if no results
            }
        } catch (error) {
            console.error('Error fetching game data:', error);
        }
    };

    return (
        <div className="main-page">
            <ColoredTitle text="PricePixel" />
            <SubTitle />
            <SearchBar onSearch={handleSearch} />
            {/* Conditionally render loading icon, message, or GameCatalog */}
            {loading ? (
                <div className="loading-icon">
                    <div className="spinner"></div> {/* Loading spinner */}
                </div>
            ) : gameData.length === 0 ? (
                <p className="no-data-message">Use the search bar to <span>find the best deals</span> on your favorite games!</p>
            ) : (
                <GameCatalog games={gameData} /> // Pass game data to GameCatalog
            )}
        </div>
    );
};

export default MainPage;
