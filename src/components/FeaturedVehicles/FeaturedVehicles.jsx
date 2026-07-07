import { useState } from 'react';
import { motion } from 'framer-motion';
import './FeaturedVehicles.css';
import { vehiclesData } from '../../data/vehicles.js';
import VehicleCard from '../VehicleCard/VehicleCard.jsx';

const FeaturedVehicles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const isSearching = searchTerm.length > 0;

  const displayedVehicles = isSearching 
    ? vehiclesData.filter((v) => v.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : vehiclesData.filter((v) => v.id >= 1 && v.id <= 6);

  return (
    <section id="explore-lineup" className="featured-vehicles">
      <motion.div className="vehicles-header" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <h2>Explore Our Lineup</h2>
        <div className="header-underline"></div>
      </motion.div>

      <div className="search-container">
        <input 
          type="text" 
          className="search-input"
          placeholder="Search any model..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>

      <motion.div 
        className="vehicles-grid"
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {displayedVehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturedVehicles;