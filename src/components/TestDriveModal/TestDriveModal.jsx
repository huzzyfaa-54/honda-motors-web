// src/components/TestDriveModal/TestDriveModal.jsx

// 1. We must import useState here to manage the form's local memory
import { useState } from 'react';
import './TestDriveModal.css';

const TestDriveModal = ({ isOpen, onClose, vehicleName }) => {
  // State to track if the "API" is loading
  const [isSubmitting, setIsSubmitting] = useState(false);
  // State to track if we should show the success screen
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  // 2. This function handles the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Stops the page from refreshing
    setIsSubmitting(true); // Changes button to "Sending..."

    // 3. Simulate a backend API call taking 1.5 seconds
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true); // Triggers the success screen!
    }, 1500);
  };

  // 4. A helper function to reset the form whenever the modal closes
  const handleClose = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        <button className="close-btn" onClick={handleClose}>&times;</button>
        
        {/* 5. Conditional Rendering: Show Success UI OR Form UI */}
        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <h2 style={{ color: '#00cc66', marginBottom: '16px', fontSize: '2rem' }}>✓ Request Sent!</h2>
            <p style={{ fontSize: '1.1rem', color: '#333', lineHeight: '1.5' }}>
              Thank you! A Honda representative will contact you shortly to confirm your test drive for the <strong>{vehicleName}</strong>.
            </p>
            <button className="submit-btn" onClick={handleClose} style={{ marginTop: '24px' }}>
              Close Window
            </button>
          </div>
        ) : (
          <>
            <h3>Test Drive the {vehicleName}</h3>
            <p style={{ marginBottom: '20px', color: '#666' }}>
              Enter your details below and a dealer will contact you shortly.
            </p>

            <form className="modal-form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />
              <input type="date" required />
              
              {/* Disable the button while it's submitting so they can't click it twice! */}
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending Request...' : 'Request Date'}
              </button>
            </form>
          </>
        )}
        
      </div>
    </div>
  );
};

export default TestDriveModal;