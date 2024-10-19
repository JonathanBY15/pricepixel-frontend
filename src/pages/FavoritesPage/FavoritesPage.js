// // src/FavoritesPage.js
// import React from 'react';
// import GamePriceCard from '../../components/GamePriceCard/GamePriceCard';
// import ColoredTitle from '../../components/ColoredTitle/ColoredTitle';
// import './FavoritesPage.css';

// const stores = [
//   { name: 'Steam', price: '29.99' },
//   { name: 'Epic Games', price: '27.99' },
//   { name: 'Gog', price: '30.99' },
//   { name: 'Origin', price: '30.99' },
//   { name: 'Origin', price: '30.99' },
//   { name: 'Origin', price: '30.99' },
//   { name: 'Origin', price: '30.99' },
//   { name: 'Origin', price: '30.99' },
//   { name: 'Origin', price: '30.99' },
//   { name: 'Origin', price: '30.99' },
//   { name: 'Origin', price: '30.99' },
//   { name: 'Origin', price: '30.99' },
//   { name: 'Origin', price: '30.99' },
// ];

// const FavoritesPage = () => {
//   return (
//     <div className="favorites-page">
//         <ColoredTitle text="Notifications"/>

//         <div className="game-price-card-container">
//             <div>
//                 <GamePriceCard 
//                 gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1091500//capsule_sm_120.jpg?t=1726188854" 
//                 gameTitle="Cyberpunk 2077" 
//                 stores={stores} 
//                 />
//             </div>
//             <div>
//                 <GamePriceCard 
//                 gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1174180//capsule_sm_120.jpg?t=1720558643" 
//                 gameTitle="Red Dead Redemption 2" 
//                 stores={stores} 
//                 />
//             </div>
//             <div>
//                 <GamePriceCard 
//                 gameImage="https:\/\/shared.cloudflare.steamstatic.com\/store_item_assets\/steam\/apps\/213330\/capsule_sm_120.jpg?t=1726531114" 
//                 gameTitle="LEGO Batman 2: DC Super Heroes" 
//                 stores={stores} 
//                 />
//             </div>
//             <div>
//                 <GamePriceCard 
//                 gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1091500//capsule_sm_120.jpg?t=1726188854" 
//                 gameTitle="Cyberpunk 2077" 
//                 stores={stores} 
//                 />
//             </div>
//             <div>
//                 <GamePriceCard 
//                 gameImage="https:\/\/shared.cloudflare.steamstatic.com\/store_item_assets\/steam\/apps\/1222140\/capsule_sm_120.jpg?t=1667468479" 
//                 gameTitle="Detroit: Become Human" 
//                 stores={stores} 
//                 />
//             </div>
//             <div>
//                 <GamePriceCard 
//                 gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1174180//capsule_sm_120.jpg?t=1720558643" 
//                 gameTitle="Red Dead Redemption 2" 
//                 stores={stores} 
//                 />
//             </div>
//         </div>

//         <div className="game-price-card-container">
//             <div>
//                 <GamePriceCard 
//                 gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1091500//capsule_sm_120.jpg?t=1726188854" 
//                 gameTitle="Cyberpunk 2077" 
//                 stores={stores} 
//                 />
//             </div>
//             <div>
//                 <GamePriceCard 
//                 gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1174180//capsule_sm_120.jpg?t=1720558643" 
//                 gameTitle="Red Dead Redemption 2" 
//                 stores={stores} 
//                 />
//             </div>
//             <div>
//                 <GamePriceCard 
//                 gameImage="https:\/\/shared.cloudflare.steamstatic.com\/store_item_assets\/steam\/apps\/213330\/capsule_sm_120.jpg?t=1726531114" 
//                 gameTitle="LEGO Batman 2: DC Super Heroes" 
//                 stores={stores} 
//                 />
//             </div>
//             <div>
//                 <GamePriceCard 
//                 gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1091500//capsule_sm_120.jpg?t=1726188854" 
//                 gameTitle="Cyberpunk 2077" 
//                 stores={stores} 
//                 />
//             </div>
//             <div>
//                 <GamePriceCard 
//                 gameImage="https:\/\/shared.cloudflare.steamstatic.com\/store_item_assets\/steam\/apps\/1222140\/capsule_sm_120.jpg?t=1667468479" 
//                 gameTitle="Detroit: Become Human" 
//                 stores={stores} 
//                 />
//             </div>
//             <div>
//                 <GamePriceCard 
//                 gameImage="https://shared.cloudflare.steamstatic.com//store_item_assets//steam//apps//1174180//capsule_sm_120.jpg?t=1720558643" 
//                 gameTitle="Red Dead Redemption 2" 
//                 stores={stores} 
//                 />
//             </div>
//         </div>
//     </div>

//   );
// };

// export default FavoritesPage;





// src/FavoritesPage.js
import React, { useEffect, useState } from 'react';
import GamePriceCard from '../../components/GamePriceCard/GamePriceCard';
import ColoredTitle from '../../components/ColoredTitle/ColoredTitle';
import './FavoritesPage.css';
import axios from 'axios';

// Store ID to Name mapping
const storeNames = {
  "1": "Steam",
  "2": "GamersGate",
  "3": "GreenManGaming",
  "4": "Amazon",
  "5": "GameStop",
  "6": "Direct2Drive",
  "7": "GOG",
  "8": "Origin",
  "9": "Get Games",
  "10": "Shiny Loot",
  "11": "Humble Store",
  "12": "Desura",
  "13": "Uplay",
  "14": "IndieGameStand",
  "15": "Fanatical",
  "16": "Gamesrocket",
  "17": "Games Republic",
  "18": "SilaGames",
  "19": "Playfield",
  "20": "ImperialGames",
  "21": "WinGameStore",
  "22": "FunStockDigital",
  "23": "GameBillet",
  "24": "Voidu",
  "25": "Epic Games Store",
  "26": "Razer Game Store",
  "27": "Gamesplanet",
  "28": "Gamesload",
  "29": "2Game",
  "30": "IndieGala",
  "31": "Blizzard Shop",
  "32": "AllYouPlay",
  "33": "DLGamer",
  "34": "Noctre",
  "35": "DreamGame",
};

// Store ID to Icon mapping
const storeIcons = {
    "1": "https://www.cheapshark.com/img/stores/icons/0.png",
    "2": "https://www.cheapshark.com/img/stores/icons/1.png",
    "3": "https://www.cheapshark.com/img/stores/icons/2.png",
    "4": "https://www.cheapshark.com/img/stores/icons/3.png",
    "5": "https://www.cheapshark.com/img/stores/icons/4.png",
    "6": "https://www.cheapshark.com/img/stores/icons/5.png",
    "7": "https://www.cheapshark.com/img/stores/icons/6.png",
    "8": "https://www.cheapshark.com/img/stores/icons/7.png",
    "9": "https://www.cheapshark.com/img/stores/icons/8.png",
    "10": "https://www.cheapshark.com/img/stores/icons/9.png",
    "11": "https://www.cheapshark.com/img/stores/icons/10.png",
    "12": "https://www.cheapshark.com/img/stores/icons/11.png",
    "13": "https://www.cheapshark.com/img/stores/icons/12.png",
    "14": "https://www.cheapshark.com/img/stores/icons/13.png",
    "15": "https://www.cheapshark.com/img/stores/icons/14.png",
    "16": "https://www.cheapshark.com/img/stores/icons/15.png",
    "17": "https://www.cheapshark.com/img/stores/icons/16.png",
    "18": "https://www.cheapshark.com/img/stores/icons/17.png",
    "19": "https://www.cheapshark.com/img/stores/icons/18.png",
    "20": "https://www.cheapshark.com/img/stores/icons/19.png",
    "21": "https://www.cheapshark.com/img/stores/icons/20.png",
    "22": "https://www.cheapshark.com/img/stores/icons/21.png",
    "23": "https://www.cheapshark.com/img/stores/icons/22.png",
    "24": "https://www.cheapshark.com/img/stores/icons/23.png",
    "25": "https://www.cheapshark.com/img/stores/icons/24.png",
    "26": "https://www.cheapshark.com/img/stores/icons/25.png",
    "27": "https://www.cheapshark.com/img/stores/icons/26.png",
    "28": "https://www.cheapshark.com/img/stores/icons/27.png",
    "29": "https://www.cheapshark.com/img/stores/icons/28.png",
    "30": "https://www.cheapshark.com/img/stores/icons/29.png",
    "31": "https://www.cheapshark.com/img/stores/icons/30.png",
    "32": "https://www.cheapshark.com/img/stores/icons/31.png",
    "33": "https://www.cheapshark.com/img/stores/icons/32.png",
    "34": "https://www.cheapshark.com/img/stores/icons/33.png",
    "35": "https://www.cheapshark.com/img/stores/icons/34.png",
  };

// export default FavoritesPage;
// const FavoritesPage = () => {
//     const [stores, setStores] = useState([]);
//     const [gameTitle, setGameTitle] = useState(''); // State for game title
//     const [gameImage, setGameImage] = useState(''); // State for game image
  
//     const fetchGameData = async () => {
//       try {
//         const response = await axios.get('https://www.cheapshark.com/api/1.0/games?id=206736');
//         const { info, deals } = response.data;
  
//         // Set game title and image
//         setGameTitle(info.title);
//         setGameImage(info.thumb);
  
//         const storeData = deals.map(deal => ({
//           storeName: storeNames[deal.storeID], // Convert store ID to store name
//           storeIcon: storeIcons[deal.storeID], // Convert store ID to store icon
//           price: deal.price,
//         }));
  
//         setStores(storeData);
//       } catch (error) {
//         console.error('Error fetching game data:', error);
//         setStores([]); // Handle error by setting an empty store list
//       }
//     };
  
//     useEffect(() => {
//       fetchGameData();
//     }, []);
  
//     return (
//       <div className="favorites-page">
//         <ColoredTitle text="Notifications" />
  
//         <div className="game-price-card-container">
//           <GamePriceCard 
//             gameImage={gameImage} // Use the dynamic game image
//             gameTitle={gameTitle} // Use the dynamic game title
//             stores={stores} 
//           />
//         </div>
//       </div>
//     );
//   };
  
//   export default FavoritesPage;




const FavoritesPage = () => {
    const [gameData, setGameData] = useState([]); // State for game data
    const gameIds = ['206736', '248711', '241934']; // List of game IDs to fetch (example IDs)
  
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
      const promises = gameIds.map(id => fetchGameData(id)); // Fetch all game data
      const results = await Promise.all(promises);
      setGameData(results.filter(game => game !== null)); // Filter out any null results
    };
  
    useEffect(() => {
      fetchAllGameData();
    }, []);
  
    return (
      <div className="favorites-page">
        <ColoredTitle text="Notifications" />
  
        <div className="game-price-card-container">
          {gameData.map((game, index) => (
            <GamePriceCard 
              key={index} // Use index or a unique identifier
              gameImage={game.image} // Use the dynamic game image
              gameTitle={game.title} // Use the dynamic game title
              stores={game.stores} 
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default FavoritesPage;