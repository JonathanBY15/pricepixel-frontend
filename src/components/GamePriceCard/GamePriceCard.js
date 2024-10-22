import React, { useState, useEffect } from 'react';
import './GamePriceCard.css'; // Import the CSS for styling
import NotificationPopup from '../NotificationPopup/NotificationPopup'; // Adjust path as needed
import axios from 'axios'; // Import axios for making API calls

const GamePriceCard = ({ gameImage, gameTitle, stores, gameID, uid, email }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [alertPrice, setAlertPrice] = useState(null); // State to store the alert price
  const [loading, setLoading] = useState(true); // Loading state

  const handleSetNotificationClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  // Fetch wishlist items and check for the game's alert price
  useEffect(() => {
    const fetchWishlistItems = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/wishlist/items', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } // Include token for authentication
        });

        const wishlistItems = response.data;

        // Check if the gameID is in the wishlist items
        const gameItem = wishlistItems.find(item => item.game_id === Number(gameID));
        if (gameItem) {
          setAlertPrice(gameItem.alert_price); // Set alert price if game is found
        } else {
          setAlertPrice(null); // Reset alert price if game is not found
        }
      } catch (error) {
        console.error('Error fetching wishlist items:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    if (gameID) {
      fetchWishlistItems(); // Fetch wishlist items if gameID is defined
    }
  }, [gameID]); // Runs when the component mounts or gameID changes

  return (
    <div className="game-price-card">
      {/* Game image */}
      <img src={gameImage} alt={gameTitle} className="game-image" />
      <button 
        className={`wishlist-button ${alertPrice !== null ? 'active-alert' : ''}`} 
        onClick={handleSetNotificationClick}
      >
        <i className="fa-solid fa-bell"></i> {alertPrice !== null ? 'Manage Notification' : 'Set Notification'}
        {alertPrice !== null && (
          <span className='alert-price-span'>{` ($${alertPrice})`}</span>
        )}
      </button>

      {/* Game Title */}
      <h3 className="game-title">{gameTitle}</h3>

      {/* Store/Price pairs */}
      <div className="store-price-list">
        {stores.map((store, index) => (
          <div className="store-price-item" key={index}>
            <span className="store-name">
              <span className="store-icon-span"><img src={store.storeIcon} className="store-icon" /> </span>
              {store.storeName}
            </span>
            <span className="price">{`$${store.price}`}</span>
          </div>
        ))}
      </div>

      {isPopupOpen && (
        <NotificationPopup 
          gameID={gameID} 
          uid={uid} // Pass uid
          email={email} // Pass email
          onClose={closePopup} 
        />
      )}
    </div>
  );
};

export default GamePriceCard;
