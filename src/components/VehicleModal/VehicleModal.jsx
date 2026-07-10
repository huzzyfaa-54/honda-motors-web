import React, { useEffect } from 'react';
import './VehicleModal.css';

const VehicleModal = ({ vehicle, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  if (!vehicle) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        
        <img src={vehicle.image} alt={vehicle.name} className="modal-img" />
        
        <h2>{vehicle.name}</h2>
        <p className="price">Starting at {vehicle.price}</p>
        <p className="desc">{vehicle.description}</p>

        {/* New Detailed Grid */}
        <div className="specs-grid">
          <div className="spec-item">
            <span>Engine</span>
            <strong>{vehicle.engine}</strong>
          </div>
          <div className="spec-item">
            <span>Capacity</span>
            <strong>{vehicle.capacity}</strong>
          </div>
          <div className="spec-item">
            <span>Power</span>
            <strong>{vehicle.horsepower}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleModal;