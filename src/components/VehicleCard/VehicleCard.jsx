// src/components/VehicleCard/VehicleCard.jsx

import './VehicleCard.css';

/**
 * VehicleCard Component
 * Receives 'vehicle' as a prop from its parent component.
 * This makes the component highly reusable!
 */
const VehicleCard = ({ vehicle }) => {
  return (
    // <article> is semantic HTML for an independent, self-contained piece of content
    <article className="vehicle-card">
      <h3 className="vehicle-name">{vehicle.name}</h3>
      <p className="vehicle-price">Starting at {vehicle.price}</p>
      <p className="vehicle-desc">{vehicle.description}</p>
      <button className="vehicle-btn">Build & Price</button>
    </article>
  );
};

export default VehicleCard;