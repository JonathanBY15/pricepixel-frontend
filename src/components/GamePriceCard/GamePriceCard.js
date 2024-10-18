import React from 'react';
import './GamePriceCard.css'; // Import the CSS for styling

const GamePriceCard = ({ gameImage, gameTitle, stores }) => {
  return (
    <div className="game-price-card">
      {/* Game image */}
      <img src={gameImage} alt={gameTitle} className="game-image" />
      <button className='wishlist-button'><i class="fa-solid fa-bell"></i> Set Notification</button>

      {/* Game Title */}
      <h3 className="game-title">{gameTitle}</h3>

      {/* Store/Price pairs */}
      <div className="store-price-list">
        {stores.map((store, index) => (
          <div className="store-price-item" key={index}>
            <span className="store-name">{store.name}</span>
            <span className="price">{`$${store.price}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamePriceCard;
