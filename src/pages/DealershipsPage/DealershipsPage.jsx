import React from 'react';

const DealershipsPage = () => {
  return (
    // Added minHeight to ensure the page fills the vertical space
    <div style={{ 
      paddingTop: '150px', 
      paddingBottom: '100px', 
      color: 'white', 
      textAlign: 'center',
      minHeight: '60vh' 
    }}>
      <h1>Find a Dealership Near You</h1>
      <p>Our dealership locator is currently under construction.</p>
    </div>
  );
};

export default DealershipsPage;