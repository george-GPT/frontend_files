import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Header from './components/Header.tsx';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';

// Import Pages
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Login from './pages/Login.tsx';
import AssessmentPage from './pages/Assessment';
import NotFound from './pages/NotFound.tsx';

// Import Styles
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Header */}
        <Header />

        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/assessment" element={<AssessmentPage />} /> {/* New Route */}
            {/* Catch-all route for 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
