// src/components/VehicleCard/VehicleCard.jsx

import { Link } from 'react-router-dom';
import './VehicleCard.css';

const VehicleCard = ({ vehicle }) => {
  return (
    <article className="vehicle-card">
      {/* Add the image tag right at the top of the card! */}
      <img 
        src={vehicle.image} 
        alt={`A photo of the Honda ${vehicle.name}`} 
        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
      />
      
      <h3 className="vehicle-name">{vehicle.name}</h3>
      <p className="vehicle-price">Starting at {vehicle.price}</p>
      <p className="vehicle-desc">{vehicle.description}</p>
      
      <Link to={`/vehicle/${vehicle.id}`} className="vehicle-btn" style={{ textAlign: 'center', textDecoration: 'none', display: 'inline-block' }}>
        View Details
      </Link>
    </article>
  );
};

export default VehicleCard;