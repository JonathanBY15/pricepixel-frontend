import React, { useState } from 'react';
import './GamePriceCard.css'; // Import the CSS for styling
import NotificationPopup from '../NotificationPopup/NotificationPopup'; // Adjust path as needed

const GamePriceCard = ({ gameImage, gameTitle, stores, gameID, uid, email }) => { // Add uid and email props
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSetNotificationClick = () => {
    setIsPopupOpen(true);
    console.log(gameID);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="game-price-card">
      {/* Game image */}
      <img src={gameImage} alt={gameTitle} className="game-image" />
      <button className='wishlist-button' onClick={handleSetNotificationClick}>
        <i className="fa-solid fa-bell"></i> Set Notification
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
