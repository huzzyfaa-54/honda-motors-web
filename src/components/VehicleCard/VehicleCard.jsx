// src/components/VehicleCard/VehicleCard.jsx

// We MUST import Link from react-router-dom for this to work
import { Link } from 'react-router-dom';
import './VehicleCard.css';

const VehicleCard = ({ vehicle }) => {
  return (
    <article className="vehicle-card">
      <h3 className="vehicle-name">{vehicle.name}</h3>
      <p className="vehicle-price">Starting at {vehicle.price}</p>
      <p className="vehicle-desc">{vehicle.description}</p>
      
      {/* This is the magic Link component that replaces the old button */}
      <Link to={`/vehicle/${vehicle.id}`} className="vehicle-btn" style={{ textAlign: 'center', textDecoration: 'none', display: 'inline-block' }}>
        View Details
      </Link>
    </article>
  );
};

export default VehicleCard;