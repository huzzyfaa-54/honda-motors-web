// src/components/Navbar/Navbar.jsx
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext.jsx';
import './Navbar.css';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  // 1. New State to track if the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 2. Toggle function
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <Link to="/" onClick={() => setIsMenuOpen(false)}>
        <img src="/images/honda-logo.png" alt="Honda Logo" className="nav-logo" />
      </Link>
      
      {/* 3. The Hamburger Icon (Hidden on Desktop) */}
      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      {/* 4. The Links (Slide in on Mobile) */}
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={toggleMenu} style={{ textDecoration: 'none', color: 'inherit' }}>Vehicles</Link></li>
        <li><Link to="/build" onClick={toggleMenu} style={{ textDecoration: 'none', color: 'inherit' }}>Build & Price</Link></li>
        <li><Link to="/" onClick={toggleMenu} style={{ textDecoration: 'none', color: 'inherit' }}>Owners</Link></li>
        <li><Link to="/" onClick={toggleMenu} style={{ textDecoration: 'none', color: 'inherit' }}>Find a Dealer</Link></li>
      </ul>

      {/* Theme Toggle */}
      <button 
        onClick={toggleTheme} 
        style={{
          background: 'none',
          border: '1px solid #ccc',
          borderRadius: '20px',
          padding: '5px 15px',
          cursor: 'pointer',
          color: isDarkMode ? '#fff' : '#000',
          fontWeight: 'bold',
          zIndex: 101 /* Keeps button clickable on mobile */
        }}
      >
        {isDarkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
    </nav>
  );
};

export default Navbar;