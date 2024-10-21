import React, { useEffect, useState } from 'react';
import ColoredTitle from '../../components/ColoredTitle/ColoredTitle';
import GameCatalog from '../../components/GameCatalog/GameCatalog';
import { storeNames, storeIcons } from '../../utils/storeData'; // Adjust the path as needed
import axios from 'axios';
import './FavoritesPage.css';

const FavoritesPage = () => {
    const [gameData, setGameData] = useState([]); // State for game data
    const [gameIds, setGameIds] = useState([]); // State to store game IDs from the wishlist

    // Fetch wishlist items on component mount
    useEffect(() => {
        const fetchWishlistItems = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/wishlist/items', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } // Add token for authentication
                });
                const wishlistItems = response.data;
                const ids = wishlistItems.map(item => item.game_id); // Extract game IDs
                setGameIds(ids); // Store the game IDs
                await fetchAllGameData(ids); // Fetch game data for all wishlist items
            } catch (error) {
                console.error('Error fetching wishlist items:', error);
            }
        };

        fetchWishlistItems();
    }, []);

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

    const fetchAllGameData = async (ids) => {
        const promises = ids.map(id => fetchGameData(id)); // Fetch all game data based on IDs
        const results = await Promise.all(promises);
        setGameData(results.filter(game => game !== null)); // Filter out any null results
    };

    return (
        <div className="favorites-page">
            <ColoredTitle text="My Wishlist" />
            <GameCatalog games={gameData} /> {/* Pass game data to GameCatalog */}
        </div>
    );
};

export default FavoritesPage;
