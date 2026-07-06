// src/components/Navbar/Navbar.jsx
import { Link } from 'react-router-dom';
// 1. Import useContext and our ThemeContext
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext.jsx';
import './Navbar.css';

const Navbar = () => {
  // 2. Pull exactly what we need out of the Global Brain
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <img src="/images/honda-logo.png" alt="Honda Logo" className="nav-logo" />
      
      <ul className="nav-links">
        <li>Vehicles</li>
        <li><Link to="/build" style={{ textDecoration: 'none', color: 'inherit' }}>Build & Price</Link></li>
        <li>Owners</li>
        <li>Find a Dealer</li>
      </ul>

      {/* 3. The Theme Toggle Button */}
      <button 
        onClick={toggleTheme} 
        style={{
          background: 'none',
          border: '1px solid #ccc',
          borderRadius: '20px',
          padding: '5px 15px',
          cursor: 'pointer',
          color: isDarkMode ? '#fff' : '#000',
          fontWeight: 'bold'
        }}
      >
        {isDarkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
    </nav>
  );
};

export default Navbar;