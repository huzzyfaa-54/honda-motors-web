// src/pages/VehicleDetails/VehicleDetails.jsx
import { useParams, Link } from 'react-router-dom';
import { vehiclesData } from '../../data/vehicles.js';
import './VehicleDetails.css';

const VehicleDetails = () => {
  const { id } = useParams();
  const vehicle = vehiclesData.find((car) => car.id === parseInt(id));

  if (!vehicle) {
    return (
      <section className="details-container" style={{ textAlign: 'center' }}>
        <h2>Vehicle Not Found</h2>
        <p>Sorry, we couldn't find that car in our current lineup.</p>
        <Link to="/" className="back-link" style={{ marginTop: '16px' }}>← Return Home</Link>
      </section>
    );
  }

  return (
    <section className="details-container">
      <Link to="/" className="back-link">← Back to Lineup</Link>
      
      {/* Our new dynamic image for the details page! */}
      <img 
        src={vehicle.image} 
        alt={vehicle.name} 
        style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px', marginBottom: '24px' }}
      />
      
      <div className="details-card">
        <h1 className="details-title">{vehicle.name}</h1>
        <p className="details-price">Starting at {vehicle.price}</p>
        <p className="details-desc">{vehicle.description}</p>
        <button className="test-drive-btn">Book Test Drive</button>
      </div>
    </section>
  );
};

export default VehicleDetails;