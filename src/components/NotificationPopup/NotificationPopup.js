import React, { useState, useEffect } from 'react';
import './NotificationPopup.css'; 
import axios from 'axios'; 

const NotificationPopup = ({ gameID, uid, email, onClose }) => { 
    const [price, setPrice] = useState('');
    const [isWishlisted, setIsWishlisted] = useState(false); 
    const [loading, setLoading] = useState(true); 

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

        fetchWishlistItems();
    }, [gameID]); 

    const handleSubmit = async (e) => {
        e.preventDefault();
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

    return (
        <div className="notification-popup">
            <div className="popup-content">
                <div className="popup-heading">
                    <button className="close-button" onClick={onClose}><i className="fa-solid fa-xmark"></i></button>
                    <h3>Set Alert Price</h3>
                </div>
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
                            <button type="button" className='delete-button'>
                                <i className="fa-solid fa-trash"></i> Delete Notification
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NotificationPopup;

