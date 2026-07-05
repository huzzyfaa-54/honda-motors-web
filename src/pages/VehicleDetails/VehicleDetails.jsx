// src/pages/VehicleDetails/VehicleDetails.jsx
// 1. Import useState from React
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { vehiclesData } from '../../data/vehicles.js';
// 2. Import our new Modal component
import TestDriveModal from '../../components/TestDriveModal/TestDriveModal.jsx';
import './VehicleDetails.css';

const VehicleDetails = () => {
  const { id } = useParams();
  const vehicle = vehiclesData.find((car) => car.id === parseInt(id));

  // 3. Initialize state. It starts as 'false' (modal is closed)
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!vehicle) {
    return (
      <section className="details-container" style={{ textAlign: 'center' }}>
        <h2>Vehicle Not Found</h2>
        <Link to="/" className="back-link">← Return Home</Link>
      </section>
    );
  }

  return (
    <section className="details-container">
      <Link to="/" className="back-link">← Back to Lineup</Link>
      
      <img 
        src={vehicle.image} 
        alt={vehicle.name} 
        style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px', marginBottom: '24px' }}
      />
      
      <div className="details-card">
        <h1 className="details-title">{vehicle.name}</h1>
        <p className="details-price">Starting at {vehicle.price}</p>
        <p className="details-desc">{vehicle.description}</p>
        
        {/* 4. When the button is clicked, set state to true! */}
        <button className="test-drive-btn" onClick={() => setIsModalOpen(true)}>
          Book Test Drive
        </button>
      </div>

      {/* 5. Render the Modal. Pass it the state, the closing function, and the car name */}
      <TestDriveModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        vehicleName={vehicle.name} 
      />

    </section>
  );
};

export default VehicleDetails;