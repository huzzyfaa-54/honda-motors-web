// src/components/Navbar/Navbar.jsx
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* 1. Here is our new image logo! */}
      <img src="/images/hondaalogo.png" alt="Honda Logo" className="nav-logo" />
      
      <ul className="nav-links">
        <li>Vehicles</li>
        <li>Shopping Tools</li>
        <li>Owners</li>
        <li>Find a Dealer</li>
      </ul>
    </nav>
  );
};

export default Navbar;