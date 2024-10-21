import React from 'react';
import GamePriceCard from '../GamePriceCard/GamePriceCard'; // Adjust path as needed
import './GameCatalog.css'; // Import CSS for responsive layout

const GameCatalog = ({ games, uid, email }) => { // Accept uid and email as props
  return (
    <div className="game-catalog">
      {games.map((game, index) => (
        <GamePriceCard
          key={index} // Use index or a unique identifier
          gameImage={game.image}
          gameTitle={game.title}
          stores={game.stores}
          gameID={game.gameID}
          uid={uid} // Pass uid
          email={email} // Pass email
        />
      ))}
    </div>
  );
};

export default GameCatalog;
