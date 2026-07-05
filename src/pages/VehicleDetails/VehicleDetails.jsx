// src/pages/VehicleDetails/VehicleDetails.jsx

// useParams lets us read the URL. Link lets us navigate back.
import { useParams, Link } from 'react-router-dom';
// Import our database of cars
import { vehiclesData } from '../../data/vehicles.js';
import './VehicleDetails.css';

const VehicleDetails = () => {
  // 1. Extract the 'id' from the URL (e.g., localhost:5173/vehicle/2 -> id is "2")
  const { id } = useParams();

  // 2. Search our data array for a car whose ID matches the URL ID.
  // We use parseInt because the URL parameter is a string, but our database IDs are numbers.
  const vehicle = vehiclesData.find((car) => car.id === parseInt(id));

  // 3. Safety Check: What if the user types "/vehicle/999" which doesn't exist?
  // We show them a 404 Not Found error state.
  if (!vehicle) {
    return (
      <section className="details-container" style={{ textAlign: 'center' }}>
        <h2>Vehicle Not Found</h2>
        <p>Sorry, we couldn't find that car in our current lineup.</p>
        <Link to="/" className="back-link" style={{ marginTop: '16px' }}>← Return Home</Link>
      </section>
    );
  }

  // 4. If the car IS found, render its specific details dynamically!
  return (
    <section className="details-container">
      {/* Navigation back to the main grid */}
      <Link to="/" className="back-link">← Back to Lineup</Link>
      
      <div className="details-card">
        {/* We use the dynamic 'vehicle' object to populate the HTML */}
        <h1 className="details-title">{vehicle.name}</h1>
        <p className="details-price">Starting at {vehicle.price}</p>
        <p className="details-desc">{vehicle.description}</p>
        
        <button className="test-drive-btn">Book Test Drive</button>
      </div>
    </section>
  );
};

export default VehicleDetails;