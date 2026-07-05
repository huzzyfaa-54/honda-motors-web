// src/components/FeaturedVehicles/FeaturedVehicles.jsx

import './FeaturedVehicles.css';
// Import our mock data
import { vehiclesData } from '../../data/vehicles.js';
// Import our reusable card component
import VehicleCard from '../VehicleCard/VehicleCard.jsx';

const FeaturedVehicles = () => {
  return (
    <section className="featured-section" id="vehicles">
      <h2 className="section-title">Explore Our Lineup</h2>
      
      <div className="vehicles-grid">
        {/* We map over the array. For every car in the array, we render one VehicleCard */}
        {vehiclesData.map((car) => (
          // We pass the 'car' object down to the child component as a prop named 'vehicle'
          <VehicleCard key={car.id} vehicle={car} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedVehicles;