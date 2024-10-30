// src/pages/Home/Home.tsx

import React from 'react';
import Button from '../components/Button';
import './Home.css';

const Home: React.FC = () => {
  const handleGetStarted = () => {
    console.log('Get Started clicked');
    // Implement navigation or other logic
  };

  return (
    <div className="home-page">
      <h1>Welcome to MindModel</h1>
      <p>Your AI-driven cognitive profiling app.</p>
      <Button label="Get Started" onClick={handleGetStarted} primary />
    </div>
  );
};

export default Home;
