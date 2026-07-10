import { motion } from 'framer-motion';
// Add curly braces here:
import { vehiclesData } from '../../data/vehicles';
import VehicleCard from '../VehicleCard/VehicleCard.jsx';
import './NewArrivals.css';

const NewArrivals = () => {
  const arrivals = vehiclesData.filter(v => v.id >= 7 && v.id <= 9);
  
  return (
    <section id="new-arrivals" className="new-arrivals">
      <h2>New Arrivals</h2>
      <motion.div 
        className="vehicles-grid"
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {arrivals.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </motion.div>
    </section>
  );
};
export default NewArrivals;