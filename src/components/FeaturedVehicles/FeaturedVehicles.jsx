import { useState } from 'react';
import { motion } from 'framer-motion'; // 1. Import our new animation engine!
import './FeaturedVehicles.css';
import { vehiclesData } from '../../data/vehicles.js';
import VehicleCard from '../VehicleCard/VehicleCard.jsx';

const FeaturedVehicles = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const isSearching = searchTerm.length > 0;

  const displayedVehicles = isSearching 
    ? vehiclesData.filter((vehicle) => 
        vehicle.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : vehiclesData.slice(0, 4);

  return (
    <section className="featured-vehicles">
      {/* 2. Animate the Header sliding down */}
      <motion.div 
        className="vehicles-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} /* Only animates the first time you scroll to it */
        transition={{ duration: 0.6 }}
      >
        <h2>Explore Our Lineup</h2>
        <div className="header-underline"></div>
      </motion.div>

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
          displayedVehicles.map((vehicle, index) => (
            /* 3. Animate each card sliding up, with a staggered delay! */
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.15 // This makes the cards pop in one after another (0s, 0.15s, 0.3s...)
              }}
            >
              <VehicleCard vehicle={vehicle} />
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
};

export default FeaturedVehicles;