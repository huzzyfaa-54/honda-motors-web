import React, { useState, useEffect } from 'react';
import VehicleModal from '../../components/VehicleModal/VehicleModal';
import './ModelsPage.css';
import { API_BASE_URL } from './config'; // Make sure the path is correct

const ModelsPage = () => {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  useEffect(() => {
    // Use API_BASE_URL here
    fetch(`${API_BASE_URL}/api/vehicles`)
      .then(res => res.json())
      .then(data => setVehicles(data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="models-page" style={{ paddingTop: '100px' }}>
      <div className="models-grid">
        {vehicles.map((car) => (
          <div key={car.id} className="vehicle-card">
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