import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  // Helper to handle scrolling to New Arrivals section
  const handleNewArrivalsClick = () => {
    navigate('/'); 
    setTimeout(() => {
      document.getElementById('new-arrivals-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Helper to scroll to the very top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      {/* Logo links to Home and scrolls to top */}
      <Link 
        to="/" 
        className="logo" 
        onClick={scrollToTop}
        style={{ textDecoration: 'none', color: 'white' }}
      >
        HONDA
      </Link>
      
      <div className="nav-links">
        <Link to="/models">Models</Link>
        <button 
          onClick={handleNewArrivalsClick} 
          style={{ 
            background: 'none', 
            border: 'none', 
            color: 'white', 
            cursor: 'pointer', 
            fontSize: '1rem', 
            fontFamily: 'inherit' 
          }}
        >
          New Arrivals
        </button>
        <Link to="/dealerships">Dealerships</Link>
        <Link to="/about">About</Link>
      </div>
      
      <div className="nav-auth">
        <Link to="/login" className="login-icon">
          <FaUserCircle size={28} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;