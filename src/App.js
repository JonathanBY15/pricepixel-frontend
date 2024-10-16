// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import InfoCard from './components/InfoCard/InfoCard';
import ColoredTitle from './components/ColoredTitle/ColoredTitle';
import ColoredButton from './components/ColoredButton/ColoredButton';
import LandingPage from './pages/LandingPage/LandingPage';
import './App.css';
// Import your other components/pages here
// import Home from './pages/Home';
// import Wishlists from './pages/Wishlists';
// import About from './pages/About';
// import Contact from './pages/Contact';

const App = () => {
  return (
  <div className="app">
    <Router>
      <NavBar />
      <Routes>
        {/* Define your routes here */}
        {/* <Route path="/" exact component={Home} /> */}
        {/* <Route path="/wishlists" component={Wishlists} /> */}
        {/* <Route path="/about" component={About} /> */}
        {/* <Route path="/contact" component={Contact} /> */}
      </Routes>
    </Router>

    
    <LandingPage/>
  </div>

  );
};

export default App;

