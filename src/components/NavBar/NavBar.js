import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = !!localStorage.getItem('token');

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleNavigateAndScroll = (event, targetPath) => {
    event.preventDefault();
    setIsMenuOpen(false);
    if (location.pathname === targetPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(targetPath);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={(event) => handleNavigateAndScroll(event, '/')}>
          <h1>PricePixel</h1>
        </Link>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className={isMenuOpen ? 'fa-solid fa-times' : 'fa-solid fa-bars'}></i>
        </button>
        <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <Link
              to="/"
              className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={(event) => handleNavigateAndScroll(event, '/')}
            >
              <i className="fa-solid fa-house"></i> Home
            </Link>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <Link
                  to="/favorites"
                  className={`navbar-link ${location.pathname === '/favorites' ? 'active' : ''}`}
                  onClick={(event) => handleNavigateAndScroll(event, '/favorites')}
                >
                  <i className="fa-solid fa-bell"></i> Notifications
                </Link>
              </li>
              <li>
                <button className="navbar-link" onClick={handleLogout}>
                  <i className="fa-solid fa-right-from-bracket"></i> Log Out
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className={`navbar-link ${location.pathname === '/login' ? 'active' : ''}`}
                >
                  <i className="fa-solid fa-right-to-bracket"></i> Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className={`navbar-link ${location.pathname === '/signup' ? 'active' : ''}`}
                >
                  <i className="fa-solid fa-user-plus"></i> Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
