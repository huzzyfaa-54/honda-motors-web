// src/components/Footer/Footer.jsx

import './Footer.css';

const Footer = () => {
  // Using an object to store our column data keeps the JSX very clean
  const footerLinks = {
    vehicles: ['Civic', 'Accord', 'CR-V', 'Pilot', 'Odyssey'],
    shopping: ['Build & Price', 'Search Inventory', 'Offers & Leases'],
    support: ['Owner Link', 'Recall Information', 'Contact Us']
  };

  return (
    // <footer> is the semantic tag for the bottom section of a page
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-column">
          <h4>Vehicles</h4>
          <ul>
            {footerLinks.vehicles.map((link, index) => (
              <li key={index}><a href="#">{link}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>Shopping Tools</h4>
          <ul>
            {footerLinks.shopping.map((link, index) => (
              <li key={index}><a href="#">{link}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            {footerLinks.support.map((link, index) => (
              <li key={index}><a href="#">{link}</a></li>
            ))}
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        {/* Dynamic year ensures the copyright is always up to date */}
        <p>&copy; {new Date().getFullYear()} Honda Motors Concept. Built for learning purposes.</p>
      </div>
    </footer>
  );
};

export default Footer;