import React, { useState, useEffect } from 'react';
import './GamePriceCard.css';
import NotificationPopup from '../NotificationPopup/NotificationPopup';
import axios from 'axios';

const GamePriceCard = ({ gameImage, gameTitle, stores, gameID, uid, email }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [alertPrice, setAlertPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updateFlag, setUpdateFlag] = useState(false); // Track updates for re-render

  const handleSetNotificationClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  // Toggle update flag to trigger re-render
  const triggerUpdate = () => {
    setUpdateFlag(prev => !prev);
  };

  useEffect(() => {
    const fetchWishlistItems = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/wishlist/items', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });

        const wishlistItems = response.data;
        const gameItem = wishlistItems.find(item => item.game_id === Number(gameID));

        if (gameItem) {
          setAlertPrice(gameItem.alert_price);
        } else {
          setAlertPrice(null);
        }
      } catch (error) {
        console.error('Error fetching wishlist items:', error);
      } finally {
        setLoading(false);
      }
    };

    if (gameID) {
      fetchWishlistItems();
    }
  }, [gameID, updateFlag]); // Add updateFlag as dependency

  return (
    <div className="game-price-card">
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

      <h3 className="game-title">{gameTitle}</h3>

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
          uid={uid}
          email={email}
          onClose={closePopup}
          triggerUpdate={triggerUpdate} // Pass triggerUpdate to NotificationPopup
        />
      )}
    </div>
  );
};

export default GamePriceCard;
