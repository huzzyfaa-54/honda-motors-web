// src/pages/Configurator/Configurator.jsx
import { useState } from 'react';
import './Configurator.css';

// 1. Our Configurator Database
const carModels = [
  { id: 'civic', name: 'Civic Sedan', basePrice: 23950 },
  { id: 'hrv', name: 'HR-V', basePrice: 25100 },   // Replaced Accord with HR-V
  { id: 'crv', name: 'CR-V', basePrice: 29500 }
];

const paintColors = [
  { id: 'white', name: 'Platinum White Pearl', hex: '#f9f9f9', premium: 0 },
  { id: 'black', name: 'Crystal Black Pearl', hex: '#111111', premium: 395 },
  { id: 'red', name: 'Rallye Red', hex: '#cc0000', premium: 395 },
  // Added the new Aegean Blue!
  { id: 'blue', name: 'Aegean Blue Metallic', hex: '#1b4079', premium: 395 } 
];

const Configurator = () => {
  // 2. Complex State: We need to track BOTH the car and the color
  const [activeCar, setActiveCar] = useState(carModels[0]);
  const [activeColor, setActiveColor] = useState(paintColors[0]);

  // 3. Dynamic Calculation: Base Price + Paint Premium
  const totalPrice = activeCar.basePrice + activeColor.premium;

  return (
    <div className="configurator-page">
      <div className="config-header">
        <h1>Build Your Honda</h1>
        <p>Design your perfect vehicle below.</p>
      </div>

      <div className="config-layout">
        {/* LEFT COLUMN: The Visuals */}
        <div className="config-visuals">
          
          {/* UPGRADED STUDIO SHOWCASE */}
          <div 
            className="car-showcase" 
            style={{ 
              // This creates a beautiful colored neon shadow behind the car
              boxShadow: `0 20px 60px ${activeColor.hex}60`, 
              // This adds a sleek colored accent line at the bottom
              borderBottom: `5px solid ${activeColor.hex}` 
            }}
          >
            <img 
  // This dynamically builds the file path! 
  // Example: If activeCar is 'civic' and activeColor is 'red', 
  // it looks for "/images/civic-red.jpg"
  src={`/images/${activeCar.id}-${activeColor.id}.jpg`} 
  
  alt={`${activeCar.name} in ${activeColor.name}`} 
  className="showcase-img" 
/>
          </div>

          <h2 className="price-display">
            Total MSRP: <span style={{ color: activeColor.hex }}>${totalPrice.toLocaleString()}</span>
          </h2>
        </div>

        {/* RIGHT COLUMN: The Controls */}
        <div className="config-controls">
          
          {/* Step 1: Choose Model */}
          <div className="control-section">
            <h3>1. Select Model</h3>
            <div className="model-buttons">
              {carModels.map((car) => (
                <button 
                  key={car.id}
                  className={`model-btn ${activeCar.id === car.id ? 'active' : ''}`}
                  onClick={() => setActiveCar(car)}
                >
                  {car.name}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Choose Color */}
          <div className="control-section">
            <h3>2. Select Color</h3>
            <p className="color-name">
              {activeColor.name} {activeColor.premium > 0 && `(+$${activeColor.premium})`}
            </p>
            <div className="color-swatches">
              {paintColors.map((color) => (
                <div 
                  key={color.name}
                  className={`swatch ${activeColor.name === color.name ? 'active-swatch' : ''}`}
                  style={{ backgroundColor: color.hex }}
                  onClick={() => setActiveColor(color)}
                ></div>
              ))}
            </div>
          </div>

          {/* Final Call to Action */}
          <button className="build-btn">Send to Dealer</button>

        </div>
      </div>
    </div>
  );
};

export default Configurator;