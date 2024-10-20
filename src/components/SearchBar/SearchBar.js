// import React, { useState } from 'react';
// import './SearchBar.css'; // Optional: for styling

// const SearchBar = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (onSearch) {
//       onSearch(searchTerm);
//     }
//   };

//   return (
//     <form className="search-bar" onSubmit={handleSearch}>
//       <input
//         type="text"
//         placeholder="Search for a game..."
//         value={searchTerm}
//         onChange={handleInputChange}
//       />
//       <button type="submit"><i className="fa-solid fa-magnifying-glass"></i> Search</button>
//     </form>
//   );
// };

// export default SearchBar;




// src/components/SearchBar/SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css'; // Optional: for styling

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(searchTerm);
        }
    };

    return (
        <form className="search-bar" onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search for a game..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button type="submit"><i className="fa-solid fa-magnifying-glass"></i> Search</button>
        </form>
    );
};

export default SearchBar;

