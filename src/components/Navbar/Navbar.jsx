// src/components/Navbar/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar premium-nav">
      <Link to="/" onClick={() => setIsMenuOpen(false)}>
        {/* We use a style filter to instantly make the black Honda logo bright white */}
        
      </Link>
      
      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Models</Link></li>
        <li><Link to="/build" onClick={toggleMenu}>Build & Price</Link></li>
        <li><Link to="/" onClick={toggleMenu}>Dealerships</Link></li>
        <li><Link to="/" onClick={toggleMenu}>About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;