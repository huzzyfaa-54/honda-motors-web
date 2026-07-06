import { motion } from 'framer-motion';
import { vehiclesData } from '../../data/vehicles.js';
import VehicleCard from '../VehicleCard/VehicleCard.jsx';
import './NewArrivals.css';

const NewArrivals = () => {
  const arrivals = vehiclesData.filter(v => v.id >= 7 && v.id <= 9);
  
  return (
    <section id="new-arrivals" className="new-arrivals">
      <h2>New Arrivals</h2>
      <div className="vehicles-grid">
        {arrivals.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </section>
  );
};
export default NewArrivals;