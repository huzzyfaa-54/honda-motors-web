// src/components/FeaturedVehicles/FeaturedVehicles.jsx

// 1. Import useState
import { useState } from 'react';
import './FeaturedVehicles.css';
import { vehiclesData } from '../../data/vehicles.js';
import VehicleCard from '../VehicleCard/VehicleCard.jsx';

const FeaturedVehicles = () => {
  // 2. Create state to hold whatever the user types into the search box
  const [searchTerm, setSearchTerm] = useState('');

  // 3. Filter the data dynamically! 
  // This runs every single time the user types a letter.
  const filteredVehicles = vehiclesData.filter((vehicle) => {
    // We convert everything to lowercase so "civic" matches "Civic"
    return vehicle.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <section className="featured-vehicles">
      <div className="vehicles-header">
        <h2>Explore Our Lineup</h2>
        <div className="header-underline"></div>
      </div>

      {/* 4. The Search Input Field */}
      <div className="search-container">
        <input 
          type="text" 
          className="search-input"
          placeholder="Search for a model (e.g., Civic)..."
          value={searchTerm}
          // Every time a key is pressed, we update the state!
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>

      <div className="vehicles-grid">
        {/* 5. Conditional Rendering: If no cars match, show a message */}
        {filteredVehicles.length === 0 ? (
          <p className="no-results">No vehicles match your search. Try another name!</p>
        ) : (
          /* Otherwise, map over the FILTERED list, not the whole database */
          filteredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))
        )}
      </div>
    </section>
  );
};

export default FeaturedVehicles;