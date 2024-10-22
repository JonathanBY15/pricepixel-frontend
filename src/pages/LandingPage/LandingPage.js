import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import InfoCard from '../../components/InfoCard/InfoCard';
import ColoredTitle from '../../components/ColoredTitle/ColoredTitle';
import ColoredButton from '../../components/ColoredButton/ColoredButton';
import LogoSlider from '../../components/LogoSlider/LogoSlider';
import SubTitle from '../../components/SubTitle/SubTitle';
import GameCatalog from '../../components/GameCatalog/GameCatalog'; // Import GameCatalog
import MainPage from '../MainPage/MainPage';  // Import MainPage for logged-in users
import { storeNames, storeIcons } from '../../utils/storeData'; // Adjust the path as needed
import axios from 'axios'; // Import axios for making API requests
import './LandingPage.css';

const LandingPage = () => {
  const isLoggedIn = !!localStorage.getItem('token'); // Check if the user is logged in

  const [gameData, setGameData] = useState([]); // State for game data
  const [loading, setLoading] = useState(true); // Loading state

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

  // Fetch game data on component mount
  useEffect(() => {
    const gameIds = ['287450', '283424', '256330', '273627']; // Define your game IDs here
    fetchGameData(gameIds);
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div className="landing-page">
      {isLoggedIn ? (
        <MainPage />  // Render MainPage (home content) if the user is logged in
      ) : (
        <>
          <ColoredTitle text="PricePixel" />
          <SubTitle />
          <ColoredButton text="Get Started" />

          <div className="info-card-container">
            <InfoCard
              title="Price Comparison"
              description="Compare prices from various stores to find the best offers."
              icon={'/assets/piggy.png'}
            />
            <InfoCard
              title="Wishlist Alerts"
              description="Set price thresholds and get notified when your favorite games drop below."
              icon={'/assets/alert.png'}
            />
            <InfoCard
              title="Real-Time Prices"
              description="View current prices across stores for the best deals."
              icon={'/assets/time.png'}
            />
          </div>

          <LogoSlider />

          <p className="subtitle">Popular Games</p>

          {/* Render GameCatalog with fetched game data */}
          {!loading ? (
            <GameCatalog games={gameData} uid={null} email={null} /> // Pass uid and email as needed
          ) : (
            <p>Loading games...</p> // Optional loading message
          )}
        </>
      )}
    </div>
  );
};

export default LandingPage;
