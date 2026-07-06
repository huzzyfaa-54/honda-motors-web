// src/pages/Configurator/Configurator.jsx
import { useState, useEffect } from 'react';
import './Configurator.css';

// 1. Our Configurator Database
const carModels = [
  { id: 'civic', name: 'Civic Sedan', basePrice: 23950 },
  { id: 'hrv', name: 'HR-V', basePrice: 25100 },
  { id: 'crv', name: 'CR-V', basePrice: 29500 }
];

const paintColors = [
  { id: 'white', name: 'Platinum White Pearl', hex: '#f9f9f9', premium: 0 },
  { id: 'black', name: 'Crystal Black Pearl', hex: '#111111', premium: 395 },
  { id: 'red', name: 'Rallye Red', hex: '#cc0000', premium: 395 },
  { id: 'blue', name: 'Aegean Blue Metallic', hex: '#1b4079', premium: 395 }
];

const Configurator = () => {
  const [activeCar, setActiveCar] = useState(carModels[0]);
  const [activeColor, setActiveColor] = useState(paintColors[0]);

  const totalPrice = activeCar.basePrice + activeColor.premium;

  // --- NEW: THE PRELOADER ENGINE ---
  // useEffect runs exactly once when this page first loads
  useEffect(() => {
    carModels.forEach((car) => {
      paintColors.forEach((color) => {
        // We create an invisible HTML image element in the background
        const img = new Image();
        // Telling the browser the source forces it to download and cache the file silently!
        img.src = `/images/${car.id}-${color.id}.jpg`;
      });
    });
  }, []); // The empty array means "only run this on the initial load"

  return (
    <div className="configurator-page">
      <div className="config-header">
        <h1>Build Your Honda</h1>
        <p>Design your perfect vehicle below.</p>
      </div>

      <div className="config-layout">
        {/* LEFT COLUMN: The Visuals */}
        <div className="config-visuals">
          <div 
            className="car-showcase" 
            style={{ 
              boxShadow: `0 20px 60px ${activeColor.hex}60`, 
              borderBottom: `5px solid ${activeColor.hex}` 
            }}
          >
            <img 
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
                  key={color.id}
                  className={`swatch ${activeColor.id === color.id ? 'active-swatch' : ''}`}
                  style={{ backgroundColor: color.hex }}
                  onClick={() => setActiveColor(color)}
                ></div>
              ))}
            </div>
          </div>

          <button className="build-btn">Send to Dealer</button>

        </div>
      </div>
    </div>
  );
};

export default Configurator;