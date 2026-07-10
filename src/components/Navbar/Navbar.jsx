import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar premium-nav">
      <Link to="/" className="nav-logo-container" style={{ textDecoration: 'none' }}>
        <span style={{ color: 'white', fontSize: '1.2rem', fontWeight: '700', letterSpacing: '3px' }}>HONDA</span>
      </Link>
      
      {/* FORCE HORIZONTAL LAYOUT WITH INLINE STYLES */}
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} style={{ display: 'flex', flexDirection: 'row', listStyle: 'none', gap: '2rem', margin: 0, padding: 0 }}>
        <li><a href="#explore-lineup" onClick={toggleMenu} style={{ color: 'white', textDecoration: 'none' }}>Models</a></li>
        <li><a href="#new-arrivals" onClick={toggleMenu} style={{ color: 'white', textDecoration: 'none' }}>New Arrivals</a></li>
        <li><Link to="/dealerships" onClick={toggleMenu} style={{ color: 'white', textDecoration: 'none' }}>Dealerships</Link></li>
        <li><Link to="/about" onClick={toggleMenu} style={{ color: 'white', textDecoration: 'none' }}>About</Link></li>
      </ul>

      <div className="nav-utilities">
        {/* ... your existing buttons ... */}
      </div>
      
      <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;