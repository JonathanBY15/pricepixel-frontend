// // src/FavoritesPage.js
// import React, { useEffect, useState } from 'react';
// import GamePriceCard from '../../components/GamePriceCard/GamePriceCard';
// import ColoredTitle from '../../components/ColoredTitle/ColoredTitle';
// import GameCatalog from '../../components/GameCatalog/GameCatalog';
// import { storeNames, storeIcons } from '../../utils/storeData'; // Adjust the path as needed
// import SearchBar from '../../components/SearchBar/SearchBar';
// import axios from 'axios';
// import './FavoritesPage.css';

// const FavoritesPage = () => {
//     const [gameData, setGameData] = useState([]); // State for game data
//     const gameIds = ['206736', '248711', '241934', '144158', '144158', '144158', '144158', '144158', '144158', '144158', '144158', '144158', '144158', '144158']; // List of game IDs to fetch (example IDs)

//     const fetchGameData = async (id) => {
//       try {
//         const response = await axios.get(`https://www.cheapshark.com/api/1.0/games?id=${id}`);
//         const { info, deals } = response.data;
  
//         const storeData = deals.map(deal => ({
//           storeName: storeNames[deal.storeID], // Convert store ID to store name
//           storeIcon: storeIcons[deal.storeID], // Convert store ID to store icon
//           price: deal.price,
//         }));
  
//         // Return the game information including the title, image, and stores
//         return {
//           title: info.title,
//           image: info.thumb,
//           stores: storeData,
//         };
//       } catch (error) {
//         console.error('Error fetching game data:', error);
//         return null; // Return null in case of error
//       }
//     };
  
//     const fetchAllGameData = async () => {
//       const promises = gameIds.map(id => fetchGameData(id)); // Fetch all game data
//       const results = await Promise.all(promises);
//       setGameData(results.filter(game => game !== null)); // Filter out any null results
//     };
  
//     const handleSearch = (searchTerm) => {
//       console.log(`Searching for: ${searchTerm}`);
//       // You can handle the search logic here
//     };  

//     useEffect(() => {
//       fetchAllGameData();
//     }, []);

//     return (
//       <div className="favorites-page">
//         <ColoredTitle text="Notifications" />
//         <SearchBar onSearch={handleSearch} />
//         <GameCatalog games={gameData} /> {/* Pass game data to GameCatalog */}
//       </div>
//     );
//   };
  
//   export default FavoritesPage;






// src/FavoritesPage.js
import React, { useEffect, useState } from 'react';
import GamePriceCard from '../../components/GamePriceCard/GamePriceCard';
import ColoredTitle from '../../components/ColoredTitle/ColoredTitle';
import GameCatalog from '../../components/GameCatalog/GameCatalog';
import { storeNames, storeIcons } from '../../utils/storeData'; // Adjust the path as needed
import SearchBar from '../../components/SearchBar/SearchBar';
import axios from 'axios';
import './FavoritesPage.css';

const FavoritesPage = () => {
    const [gameData, setGameData] = useState([]); // State for game data
    const [gameIds, setGameIds] = useState([]); // State to store game IDs from search results

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
        const promises = gameIds.map(id => fetchGameData(id)); // Fetch all game data based on IDs
        const results = await Promise.all(promises);
        setGameData(results.filter(game => game !== null)); // Filter out any null results
    };

    const handleSearch = async (searchTerm) => {
        console.log(`Searching for: ${searchTerm}`);

        try {
            const response = await axios.get(`https://www.cheapshark.com/api/1.0/games?title=${searchTerm}`);
            const games = response.data; // Adjust according to the actual response structure

            if (games.length > 0) {
                const ids = games.map(game => game.gameID); // Extract game IDs
                console.log('Game IDs from search result:', ids); // Log the game IDs
                setGameIds(ids); // Store the game IDs
                await fetchAllGameData(); // Fetch game data with the new IDs
            } else {
                console.error('No games found for the given search term.');
                setGameData([]); // Reset game data if no results
            }
        } catch (error) {
            console.error('Error fetching game data:', error);
        }
    };

    return (
        <div className="favorites-page">
            <ColoredTitle text="Notifications" />
            <SearchBar onSearch={handleSearch} />
            <GameCatalog games={gameData} /> {/* Pass game data to GameCatalog */}
        </div>
    );
};

export default FavoritesPage;