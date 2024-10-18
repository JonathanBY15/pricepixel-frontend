// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import InfoCard from './components/InfoCard/InfoCard';
import ColoredTitle from './components/ColoredTitle/ColoredTitle';
import ColoredButton from './components/ColoredButton/ColoredButton';
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import MainPage from './pages/MainPage/MainPage';
import './App.css';
// Import your other components/pages here
// import Login from './pages/Login';
// import Signup from './pages/Signup';

const App = () => {
  return (
  <div className="app">
    <Router>
      <NavBar />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
      </Routes>
    </Router>

    {/* <LandingPage/> */}
  </div>

  );
};

export default App;

