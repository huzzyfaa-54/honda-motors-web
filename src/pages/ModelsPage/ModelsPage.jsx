import React, { useState } from 'react';
import { vehiclesData } from '../../data/vehicles';
import VehicleModal from '../../components/VehicleModal/VehicleModal';
import './ModelsPage.css';

const ModelsPage = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  return (
    <div className="models-page" style={{ paddingTop: '100px', paddingBottom: '50px' }}>
      <div className="models-grid">
        {vehiclesData.map((car) => (
          <div key={car.id} className="model-card">
            <img src={car.image} alt={car.name} className="card-img" />
            <div className="card-content">
              <h3>{car.name}</h3>
              <p>{car.description}</p>
              <button className="btn-details" onClick={() => setSelectedVehicle(car)}>
                VIEW DETAILS
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedVehicle && (
        <VehicleModal 
          vehicle={selectedVehicle} 
          onClose={() => setSelectedVehicle(null)} 
        />
      )}
    </div>
  );
};

export default ModelsPage;