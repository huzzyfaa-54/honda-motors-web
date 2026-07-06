// src/components/Navbar/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar premium-nav">
      
      {/* 1. Left: Logo (Now Text) */}
      <Link to="/" onClick={() => setIsMenuOpen(false)} className="nav-logo-container" style={{ textDecoration: 'none' }}>
        <span style={{ color: 'white', fontSize: '1.2rem', fontWeight: '700', letterSpacing: '3px' }}>
          HONDA
        </span>
      </Link>
      
      {/* 2. Middle: Links */}
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Models</Link></li>
        <li><Link to="/" onClick={toggleMenu}>New Arrivals</Link></li>
        <li><Link to="/" onClick={toggleMenu}>Dealerships</Link></li>
        <li><Link to="/" onClick={toggleMenu}>About</Link></li>
      </ul>

      {/* 3. Right: Utility Icons (Search, Heart, Account) */}
      <div className="nav-utilities">
        <button className="icon-btn" aria-label="Search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
        
        <button className="icon-btn" aria-label="Wishlist">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>

        <button className="user-profile-btn" aria-label="Account">
          <div className="user-icon-circle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>
      
      {/* 4. Mobile Hamburger */}
      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;