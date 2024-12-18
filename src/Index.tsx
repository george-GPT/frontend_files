import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Index.css'; // Corrected import path

const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element.");
}
