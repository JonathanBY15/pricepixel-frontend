// NotificationPopup.js
import React, { useState } from 'react';
import './NotificationPopup.css'; // Ensure this imports your updated CSS

const NotificationPopup = ({ gameID, onClose }) => {
    const email = 'bariscanyaprak@gmail.com';
    const [price, setPrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://www.cheapshark.com/api/1.0/alerts?action=set&email=${email}&gameID=${gameID}&price=${price}`);
            // Handle the response as needed (e.g., display success message)
            console.log('Notification set:', response);
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
                    <div className="form-group"> {/* Added form-group wrapper */}
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
                    <button type="submit" className='set-button'>
                        <i className="fa-solid fa-bell"></i> Set Notification
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NotificationPopup;
