import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './NotificationPopup.css'; 
import ColoredButton from '../ColoredButton/ColoredButton'; // Import ColoredButton
import axios from 'axios'; 

const NotificationPopup = ({ gameID, uid, email, onClose }) => { 
    const [price, setPrice] = useState('');
    const [isWishlisted, setIsWishlisted] = useState(false); 
    const [loading, setLoading] = useState(true); 
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const fetchWishlistItems = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/wishlist/items', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } 
                });

                const wishlistItems = response.data;

                if (gameID) {
                    const isGameWishlisted = wishlistItems.some(item => {
                        return item.game_id === Number(gameID);
                    });

                    setIsWishlisted(isGameWishlisted);
                    console.log(`Game ID: ${gameID} is wishlisted: ${isGameWishlisted}`); // Log final status
                } else {
                    console.warn('gameID is undefined');
                }
            } catch (error) {
                console.error('Error fetching wishlist items:', error);
            } finally {
                setLoading(false); // Set loading to false once data is fetched
            }
        };

        if (uid) { // Only fetch wishlist items if uid exists
            fetchWishlistItems();
        } else {
            setLoading(false); // Set loading to false immediately if uid is not available
        }
    }, [gameID, uid]); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!uid) return; // Do not proceed if there is no uid

        try {
            console.log('Setting notification for game:', gameID, 'at price:', price, 'for user:', uid, 'with email:', email);

            // Set the notification with CheapShark API
            const response = await fetch(`https://www.cheapshark.com/api/1.0/alerts?action=set&email=${email}&gameID=${gameID}&price=${price}`);
            console.log('Notification set:', response);

            // Send request to backend to add the item to the wishlist
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
                console.log('Game added to wishlist');
                setIsWishlisted(true);
            } else {
                console.error('Failed to add game to wishlist');
            }

            onClose(); // Close the popup after submission
        } catch (error) {
            console.error('Error setting notification:', error);
        }
    };

    const handleDeleteNotification = async () => {
        try {
            console.log('Removing notification for game:', gameID, 'for user:', email);
    
            // Send request to CheapShark API to delete the notification
            const deleteResponse = await fetch(`https://www.cheapshark.com/api/1.0/alerts?action=delete&email=${email}&gameID=${gameID}`);
            console.log('Delete notification response:', deleteResponse);
    
            // Send request to backend to remove the item from the wishlist
            const wishlistDeleteResponse = await fetch('http://localhost:3001/api/wishlist/remove', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify({
                    gameID: gameID, // Pass the gameID to remove
                }),
            });
    
            if (wishlistDeleteResponse.ok) {
                console.log('Game removed from wishlist');
                setIsWishlisted(false); // Update state to reflect that the game is no longer wishlisted
    
                // Refresh the page to see the updated state
                window.location.reload();
            } else {
                console.error('Failed to remove game from wishlist');
            }
    
            onClose(); // Close the popup after deletion
        } catch (error) {
            console.error('Error deleting notification:', error);
        }
    };

    const handleLoginRedirect = () => {
        navigate('/login'); // Use navigate to go to the login page
    };

    return (
        <div className="notification-popup">
            <div className="popup-content">
                <div className="popup-heading">
                    <button className="close-button" onClick={onClose}><i className="fa-solid fa-xmark"></i></button>
                </div>
                {uid ? ( // Conditional rendering based on uid
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
                    <>
                        <div className="login-message">
                        <h3><i className="fa-solid fa-bell"></i> Login to receive price alerts.</h3>
                        <p>Get notified when your game prices drop! Set a price, and we'll email you when it falls below.</p>
                        <ColoredButton text="Get Started" className="get-started" />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default NotificationPopup;

