import { useState } from 'react';
import './FeaturedVehicles.css';
import { vehiclesData } from '../../data/vehicles.js';
import VehicleCard from '../VehicleCard/VehicleCard.jsx';

const FeaturedVehicles = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // 1. Check if the user is actually typing something
  const isSearching = searchTerm.length > 0;

  // 2. The Magic Logic: If searching, filter the whole database. 
  // If NOT searching, only slice the first 4 cars to show on the grid.
  const displayedVehicles = isSearching 
    ? vehiclesData.filter((vehicle) => 
        vehicle.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : vehiclesData.slice(0, 4);

  return (
    <section className="featured-vehicles">
      <div className="vehicles-header">
        <h2>Explore Our Lineup</h2>
        <div className="header-underline"></div>
      </div>

      <div className="search-container">
        <input 
          type="text" 
          className="search-input"
          placeholder="Search any model (e.g., City, HR-V)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>

      <div className="vehicles-grid">
        {displayedVehicles.length === 0 ? (
          <p className="no-results">No vehicles match your search. Try another name!</p>
        ) : (
          displayedVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))
        )}
      </div>
    </section>
  );
};

export default FeaturedVehicles;