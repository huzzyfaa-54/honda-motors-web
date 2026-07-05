// src/components/Navbar/Navbar.jsx

// We import the CSS file so Vite knows to apply these styles to this component
import './Navbar.css';

/**
 * Navbar Component
 * Renders the top navigation header for the application.
 */
const Navbar = () => {
  // Using an array for links is a Senior developer best practice. 
  // It keeps the component clean and makes it easy to add new links later.
  const navItems = ['Vehicles', 'Shopping Tools', 'Owners', 'Find a Dealer'];

  return (
    // <header> is a semantic HTML5 tag representing introductory content
    <header className="navbar">
      
      {/* Logo Area */}
      <div className="logo">
        HONDA
      </div>

      {/* Navigation Area */}
      <nav>
        <ul className="nav-links">
          {/* 
            We use the ES6 .map() function to loop over our navItems array 
            and dynamically generate a list item (<li>) for each one.
            React requires a unique 'key' prop when rendering lists.
          */}
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

    </header>
  );
};

// We export the component so it can be used in App.jsx
export default Navbar;