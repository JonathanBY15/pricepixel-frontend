import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'; // Import the NotFoundPage component

import PrivateRoute from './components/PrivateRoute'; // Import the PrivateRoute component
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protect the /favorites route */}
          <Route 
            path="/favorites" 
            element={
              <PrivateRoute>
                <FavoritesPage />
              </PrivateRoute>
            } 
          />

          {/* 404 Page */}
          <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route for 404 */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
