// src/components/VehicleCard/VehicleCard.jsx
import './VehicleCard.css';

const VehicleCard = ({ vehicle }) => {
  // 1. SAFE FALLBACKS: If a property is missing, use these defaults instead of crashing!
  const price = vehicle.basePrice || vehicle.price || 25000; 
  const image = vehicle.image || '/images/honda-dark-hero.jpg'; 
  const name = vehicle.name || 'Honda Vehicle';

  return (
    <div className="vehicle-card premium-card">
      <div className="card-image-wrapper">
        <div className="new-badge">NEW</div>
        <img src={image} alt={name} className="card-image" />
      </div>
      
      <div className="card-content">
        <div className="card-meta">
          <span>2025 • SIGNATURE</span>
          <span className="card-price text-accent">${price.toLocaleString()}</span>
        </div>
        
        <h3 className="card-title">{name}</h3>
        
        <div className="card-specs">
          <span>⚡ 158 hp</span>
          <span>⛽ Hybrid/Petrol</span>
        </div>
        
        
      </div>
    </div>
  );
};

export default VehicleCard;