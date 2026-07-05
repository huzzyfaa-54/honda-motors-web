// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
// Import the BrowserRouter which enables client-side routing
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* We wrap the App component so the Router context is globally available */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);