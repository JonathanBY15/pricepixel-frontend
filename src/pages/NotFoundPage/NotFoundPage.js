import React from 'react';
import { Link } from 'react-router-dom';
import ColoredButton from '../../components/ColoredButton/ColoredButton'; // Assuming you have this component
import './NotFoundPage.css'; // Custom CSS for 404 page

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <ColoredButton route="/" text="Go Home"/>
    </div>
  );
};

export default NotFoundPage;