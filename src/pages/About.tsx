// src/pages/About/About.tsx

import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <h1>About MindModel</h1>
      <p>
        MindModel is an AI-driven cognitive profiling application that offers personalized insights into your cognitive strengths and weaknesses. Our interactive assessments help you understand and enhance your cognitive abilities.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Interactive Cognitive Assessments</li>
        <li>Personalized Insights and Reports</li>
        <li>Real-time Error Monitoring with Sentry</li>
        <li>Comprehensive Analytics via Google Analytics</li>
        <li>GDPR/HIPAA Compliant Data Privacy</li>
      </ul>
      <h2>Our Mission</h2>
      <p>
        To empower individuals with actionable cognitive insights, enabling personal and professional growth through advanced AI technologies.
      </p>
    </div>
  );
};

export default About;
