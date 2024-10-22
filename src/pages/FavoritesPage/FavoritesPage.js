import React, { useEffect, useState } from 'react';
import ColoredTitle from '../../components/ColoredTitle/ColoredTitle';
import GameCatalog from '../../components/GameCatalog/GameCatalog';
import { storeNames, storeIcons } from '../../utils/storeData'; // Adjust the path as needed
import axios from 'axios';
import './FavoritesPage.css';

const FavoritesPage = () => {
    const [gameData, setGameData] = useState([]); // State for game data
    const [loading, setLoading] = useState(false); // State for loading status
    const [uid, setUid] = useState(null); // State to store user ID
    const [email, setEmail] = useState(''); // State to store user email

    // Fetch user info on component mount
    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const token = localStorage.getItem('token'); // Get the JWT token from local storage
                const response = await axios.get('http://localhost:3001/api/auth/user', {
                    headers: {
                        Authorization: `Bearer ${token}` // Include the token in the request headers
                    }
                });
                setUid(response.data.uid); // Set user ID
                setEmail(response.data.email); // Set email
            } catch (error) {
                console.error('Error fetching user info:', error);
                // Handle error (e.g., show a message to the user)
            }
        };

        fetchUserInfo(); // Call the function to fetch user info
    }, []); // Empty dependency array means this runs once on component mount

    // Fetch wishlist items on component mount
    useEffect(() => {
        const fetchWishlistItems = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/wishlist/items', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } // Add token for authentication
                });
                const wishlistItems = response.data;
                const ids = wishlistItems.map(item => item.game_id); // Extract game IDs
                await fetchGameData(ids); // Fetch game data for all wishlist items
            } catch (error) {
                console.error('Error fetching wishlist items:', error);
            }
        };

        fetchWishlistItems();
    }, []); // This runs once on component mount after user info has been fetched

    const fetchGameData = async (ids) => {
        try {
            setLoading(true); // Set loading to true when fetching data
            const limitedIds = ids.slice(0, 25).join(','); // Limit to 25 IDs for the request
            const response = await axios.get(`https://www.cheapshark.com/api/1.0/games?ids=${limitedIds}`);
            const games = response.data;

            const processedGameData = Object.entries(games).map(([gameID, game]) => ({
                gameID: gameID, // Use the key (which is the gameID) directly
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

    return (
        <div className="favorites-page">
            <ColoredTitle text="Notifications" />
            {loading ? (
                <div className="loading-icon">
                    <div className="spinner"></div> {/* Loading spinner */}
                </div>
            ) : uid && email ? ( // Ensure uid and email are defined before rendering
                gameData.length > 0 ? ( // Check if there are any games in the data
                    <GameCatalog games={gameData} uid={uid} email={email} /> // Pass game data, uid, and email to GameCatalog
                ) : (
                    <p className="no-data-message">You currently have no price alerts. Use the <span>Home Page</span> to set price notifications.</p>
                )
            ) : (
                <p>Loading user data...</p> // Optionally display a loading state
            )}
        </div>
    );
};

export default FavoritesPage;
