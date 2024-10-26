import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NotificationPopup.css';
import ColoredButton from '../ColoredButton/ColoredButton';
import axios from 'axios';

const NotificationPopup = ({ gameID, uid, email, onClose, triggerUpdate }) => {
  const [price, setPrice] = useState('');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWishlistItems = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/wishlist/items', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });

        const wishlistItems = response.data;
        const isGameWishlisted = wishlistItems.some(item => item.game_id === Number(gameID));

        setIsWishlisted(isGameWishlisted);
      } catch (error) {
        console.error('Error fetching wishlist items:', error);
      } finally {
        setLoading(false);
      }
    };

    if (uid) {
      fetchWishlistItems();
    } else {
      setLoading(false);
    }
  }, [gameID, uid]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!uid) return;

    try {
      const response = await fetch(`https://www.cheapshark.com/api/1.0/alerts?action=set&email=${email}&gameID=${gameID}&price=${price}`);
      const wishlistResponse = await fetch('http://localhost:3001/api/wishlist/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          uid: uid,
          gameID: gameID,
          alert_price: price,
        }),
      });

      if (wishlistResponse.ok) {
        setIsWishlisted(true);
        triggerUpdate(); // Trigger re-render in GamePriceCard
      }
      onClose();
    } catch (error) {
      console.error('Error setting notification:', error);
    }
  };

  const handleDeleteNotification = async () => {
    try {
      const deleteResponse = await fetch(`https://www.cheapshark.com/api/1.0/alerts?action=delete&email=${email}&gameID=${gameID}`);
      const wishlistDeleteResponse = await fetch('http://localhost:3001/api/wishlist/remove', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          gameID: gameID,
        }),
      });

      if (wishlistDeleteResponse.ok) {
        setIsWishlisted(false);
        triggerUpdate(); // Trigger re-render in GamePriceCard
      }
      onClose();
    } catch (error) {
      console.error('Error deleting notification:', error);
    }
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="notification-popup">
      <div className="popup-content">
        <div className="popup-heading">
          <button className="close-button" onClick={onClose}><i className="fa-solid fa-xmark"></i></button>
        </div>
        {uid ? (
          <>
            <h3>Set Alert Price</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>
                  Price:
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">$</div>
                    </div>
                    <input 
                      type="number" 
                      value={price} 
                      onChange={(e) => setPrice(e.target.value)} 
                      required 
                      min="0" 
                      className="price-input"
                      placeholder='EX: 10.00 or 10'
                    />
                  </div>
                </label>
              </div>
              <div className="button-group">
                <button type="submit" className='set-button'>
                  <i className="fa-solid fa-bell"></i> Set Notification
                </button>
                {!loading && isWishlisted && (
                  <button type="button" className='delete-button' onClick={handleDeleteNotification}>
                    <i className="fa-solid fa-trash"></i> Delete Notification
                  </button>
                )}
              </div>
            </form>
          </>
        ) : (
          <div className="login-message">
            <h3><i className="fa-solid fa-bell"></i> Login to receive price alerts.</h3>
            <p>Get notified when your game prices drop! Set a price, and we'll email you when it falls below.</p>
            <ColoredButton text="Get Started" className="get-started" />
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationPopup;
