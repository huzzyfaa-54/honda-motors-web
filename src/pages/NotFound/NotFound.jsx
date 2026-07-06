// src/pages/NotFound/NotFound.jsx
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The vehicle or page you are looking for does not exist in our showroom.</p>
      
      {/* Safe routing back to the homepage */}
      <Link to="/" className="return-home-btn">
        Return to Showroom
      </Link>
    </div>
  );
};

export default NotFound;