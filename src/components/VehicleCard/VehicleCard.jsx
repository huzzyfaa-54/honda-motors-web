import React from 'react';
import './VehicleCard.css';

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="vehicle-card">
      <img src={vehicle.image} alt={vehicle.name} className="card-img" />
      
      <div className="card-content">
        <p className="year-badge">2025 • SIGNATURE</p>
        <h3 className="vehicle-name">{vehicle.name}</h3>
        <p className="vehicle-price">{vehicle.price}</p>
        
        {/* Dynamic Specs Section */}
        <div className="specs-row">
          <span>⚡ {vehicle.horsepower}</span>
          <span>⛽ {vehicle.engine}</span>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;