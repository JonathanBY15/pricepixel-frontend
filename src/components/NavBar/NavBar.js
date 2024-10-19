import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './NavBar.css'; // Optional: for styling

const NavBar = () => {
  const navigate = useNavigate(); // For programmatic navigation
  const location = useLocation(); // To get current route
  const isLoggedIn = !!localStorage.getItem('token'); // Check if token exists in localStorage

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    navigate('/login'); // Redirect to login page after logout
  };

  const handleLogoClick = (event) => {
    if (location.pathname === '/') {
      event.preventDefault(); // Prevent default navigation if on the same page
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top of the page smoothly
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={handleLogoClick}>
          <h1>PricePixel</h1>
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link 
              to="/" 
              className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`} 
              onClick={handleLogoClick}
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
                >
                  <i className="fa-solid fa-star"></i> Favorites
                </Link>
              </li>
              <li>
                <Link 
                  to="/login"
                  className="navbar-link"
                  onClick={handleLogout}
                >
                  <i className="fa-solid fa-right-from-bracket"></i> Log Out
                </Link>
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
