// src/components/Footer/Footer.jsx
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="premium-footer">
      <div className="footer-content">
        
        {/* Left Side: Brand Statement (Now Text Only) */}
        <div className="footer-brand">
          <div className="footer-logo-container">
            <span className="footer-brand-name" style={{ fontSize: '1.5rem', letterSpacing: '4px' }}>
              HONDA
            </span>
          </div>
          <p className="footer-tagline">
            The Power of Dreams. Excellence in Japanese automotive engineering.
          </p>
        </div>

        {/* Right Side: Link Columns */}
        <div className="footer-links-grid">
          
          <div className="footer-column">
            <h4>Models</h4>
            <ul>
              <li><Link to="/">Civic</Link></li>
              <li><Link to="/">Accord</Link></li>
              <li><Link to="/">CR-V</Link></li>
              <li><Link to="/">Pilot</Link></li>
              <li><Link to="/">Odyssey</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Shopping Tools</h4>
            <ul>
              <li><Link to="/build">Build & Price</Link></li>
              <li><Link to="/">Search Inventory</Link></li>
              <li><Link to="/">Offers & Leases</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><Link to="/">Owner Link</Link></li>
              <li><Link to="/">Recall Information</Link></li>
              <li><Link to="/">Contact Us</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2026 Honda Motors Concept. All rights reserved.</p>
        <p className="footer-version">DBMS Platform v2.5</p>
      </div>
    </footer>
  );
};

export default Footer;