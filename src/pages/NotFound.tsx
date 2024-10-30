// src/pages/NotFound/NotFound.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';
import Button from '../components/Button';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="notfound-page">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Button label="Go to Home" onClick={handleGoHome} primary />
    </div>
  );
};

export default NotFound;
