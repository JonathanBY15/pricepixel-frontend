import React from 'react';
import GamePriceCard from '../GamePriceCard/GamePriceCard'; // Adjust path as needed
import './GameCatalog.css'; // Import CSS for responsive layout

const GameCatalog = ({ games }) => {
  return (
    <div className="game-catalog">
      {games.map((game, index) => (
        <GamePriceCard
          key={index} // Use index or a unique identifier
          gameImage={game.image}
          gameTitle={game.title}
          stores={game.stores}
        />
      ))}
    </div>
  );
};

export default GameCatalog;