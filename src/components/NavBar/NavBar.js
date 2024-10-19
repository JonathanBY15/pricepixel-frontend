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

  const handleNavigateAndScroll = (event, targetPath) => {
    event.preventDefault();

    if (location.pathname === targetPath) {
      // If the user is already on the target page, just scroll to the top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If the user is on a different page, navigate to the target page
      navigate(targetPath);
      // After navigating, scroll to the top of the page
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100); // Adding a slight delay to ensure the page has navigated
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link
          to="/"
          className="navbar-logo"
          onClick={(event) => handleNavigateAndScroll(event, '/')}
        >
          <h1>PricePixel</h1>
        </Link>
        <ul className="navbar-menu">
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
